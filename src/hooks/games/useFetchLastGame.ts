import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/getGames";
import { Game } from "../../games/interfaces/games.interface";

const getLastGame = async (): Promise<Game | void> => {
	try {
		const { data } = await githubApi.get<Game>('/games/last');
		console.log(data)
		while (data !== undefined) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

export const useFetchLastGame = () => {
	const lastGameQuery = useQuery({
		queryKey: ['lastGame'],
		queryFn: () => getLastGame(),
		retry: 3, // Reintentos cuando da error
		refetchOnWindowFocus: true, // Para que no se refresque al salir y entrar de la ventana
		staleTime: 1000 * 1, // Tiempo que la data se considera fresca. 1 segundos
		// enabled: searchName !== undefined, // Esto es para setear una condición para que se ejecute la query
		// refetchInterval: 1000 * 60, // Refresca la data cada minuto
		// refetchIntervalInBackground: true, // Refresca la data cada minuto en segundo plano
		// refetchOnMount: false, // Refresca la data al montar el componente
		// refetchOnReconnect: false, // Refresca la data al reconectar
		// refetchOnFocus: false, // Refresca la data al enfocar
	});

	return {
		lastGame: lastGameQuery.data,
		isLoadingLastGame: lastGameQuery.isLoading,
		lastGameError: lastGameQuery.error?.message,
	};
};
