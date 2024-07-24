import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/getGames";
import { Game } from "../../games/interfaces/games.interface";

const getLastGame = async (): Promise<Game | void> => {
	try {
		const { data } = await githubApi.get<Game>('/games/last');
		console.log(data)
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const useFetchLastGame = () => {
	const lastGameQuery = useQuery({
		queryKey: ['game', 'last'],
		queryFn: () => getLastGame(),
		retry: 1, // Reintentos cuando da error
		refetchOnWindowFocus: false, // Para que no se refresque al salir y entrar de la ventana
		staleTime: 1000 * 5, // Tiempo que la data se considera fresca. 5 segundos
	});

	return {
		lastGame: lastGameQuery.data,
		isLoadingLastGame: lastGameQuery.isLoading,
		lastGameError: lastGameQuery.error?.message,
	};
};
