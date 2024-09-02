import { useMutation } from "@tanstack/react-query";
import { updateGame } from "../../games/actions";
import { Game } from "../../games/interfaces/games.interface";
import { queryClient } from "../../utils/tanstackQuery";

export const useUpdateGameMutation = () => {
  const mutation = useMutation({
    mutationFn: (game: Game) => updateGame(game),
    onSuccess: (data) => { // Es la respuesta de la petición http
      console.log("Game updated successfully", data);
      // queryClient.invalidateQueries("lastGame" as InvalidateQueryFilters);
      queryClient.setQueryData<Game | void>(["lastGame"], data);
    },
    onSettled: () => {
      console.log("Game updated");
    }
  })
  return mutation;
};