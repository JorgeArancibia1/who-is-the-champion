import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { githubApi } from "../../api/getGames";
import { Game } from "../../games/interfaces/games.interface";

const getGames = async (): Promise<Game[] | void> => {
	try {
		const { data } = await githubApi.get<Game[]>(`/games`);

		console.log(data);

		return data;
	} catch (error) {
		const err = error as AxiosError;
		console.log(err.response?.status, err.message);
		if (err.response?.status === 500) {
			throw new Error("Error en el servidor, por favor contactar con soporte");
		}
	}
};

export const useFetchGames = () => {
	const gamesQuery = useQuery({
		queryKey: [],
		queryFn: () => getGames(),
		// enabled: searchName !== "",
	});

	return {
		games: gamesQuery.data || null,
		isLoading: gamesQuery.isLoading,
		isError: gamesQuery.isError,
		error: gamesQuery.error?.message,
		isSuccess: gamesQuery.isSuccess,
	};
};
