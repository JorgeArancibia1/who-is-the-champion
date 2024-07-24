import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Game } from "../../games/interfaces/games.interface";

// Función para actualizar datos en el servidor
export const updateGame = async (id: string): Promise<Game> => {
  const { data } = await axios.put('/game ', id);
  return data;
};

export const useUpdateGame = (id: string) => {

	const update = useQuery({
		queryKey: ["game", id],
		queryFn: () => updateGame(id),
		// enabled: !!userQuery.data,
	});

	return {
    updateGameQuery: update.data,
		isLoadingCreateGame: update.isLoading,
		isSuccessCreateGame: update.isSuccess,
	};
};
