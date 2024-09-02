
// const getLastGame = async (): Promise<Game | void> => {
// 	try {
// 		const { data } = await githubApi.get<Game>('/games/last');
// 		console.log(data)
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

import { githubApi } from "../../api/getGames";
import { Game } from "../interfaces/games.interface";

export const updateGame = async (game: Game): Promise<Game | void> => {
  console.log(game);
  try {
    const { data } = await githubApi.patch<Game>(`/games/669afa28ce2e0d4a783ef0c0`, game);
    return data;
  } catch (error) {
    console.log(error);
  }
};