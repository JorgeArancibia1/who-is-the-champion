import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Game } from "../../games/interfaces/games.interface";

// Función para actualizar datos en el servidor
export const updateGame = async (updatedGame: Game): Promise<Game> => {
  const { data } = await axios.put('/game ', updatedGame);
  return data;
};

export const useCreateGames = (game: Game) => {

	const update = useQuery({
		queryKey: ["game", game],
		queryFn: () => updateGame(game),
		// enabled: !!userQuery.data,
	});

	return {
    updateGameQuery: update.data,
		isLoadingCreateGame: update.isLoading,
		isSuccessCreateGame: update.isSuccess,
	};
};
