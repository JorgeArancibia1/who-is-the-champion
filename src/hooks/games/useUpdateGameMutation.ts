import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Game } from "../../games/interfaces/games.interface";

const updateGame = async (game: Game): Promise<void> => {
  console.log('Datos enviados:', game);
};

const useUpdateGameMutation = () => {
  const queryClient = useQueryClient();

  const { data: game, isLoading } = useQuery<Game>({ queryKey: ["updateGame"] }, fetchGame);

  return useMutation(updateGame, {
    onSuccess: () => {
      queryClient.invalidateQueries(['updateGame']);
    }
  });
};

export default useUpdateGameMutation;