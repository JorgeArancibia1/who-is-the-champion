import { useQuery } from "@tanstack/react-query";
// import { AxiosError } from "axios";
import { githubApi } from "../../api/getGames";
import { Game } from "../../games/interfaces/games.interface";

const createGame = async (game: Game) => {
	try {
		const { data } = await githubApi.post<Game>(`/games`, game);

		// const response = await fetch("http://localhost:3000/api/games", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(game),
		// });
		// const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
	// window.location.reload();
};

// const getReposUser = async (searchName: string): Promise<IRepo[] | void> => {
// 	const { data } = await githubApi.get(
// 		`users/${searchName}/repos?sort=created&per_page=4`
// 	);
// 	return data;
// };

export const useCreateGames = (game: Game) => {

	const createGameQuery = useQuery({
		queryKey: ["game", game],
		queryFn: () => createGame(game),
		// enabled: !!userQuery.data,
	});

	return {
    createGameQuery: createGameQuery.data,
		isLoadingCreateGame: createGameQuery.isLoading,
		isSuccessCreateGame: createGameQuery.isSuccess,
	};
};
