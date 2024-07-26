/* eslint-disable react-hooks/rules-of-hooks */
import { FormProvider, useForm } from "react-hook-form";
import TeamComponent from "../components/TeamComponent/TeamComponent";
import { Game } from "../games/interfaces/games.interface";
import { useFetchLastGame } from "../hooks/games/useFetchLastGame";
// import { Team } from "../interfaces";

// interface FormInputs {
// 	game: Game;
// }

// interface FormInputs2 {
// 	teamA: string[];
// 	teamB: string[];
// }

// Simular una API para obtener datos de juego
// const fetchGame = async (): Promise<Game> => {
//   return {
//     place: 'Estadio Nacional',
//     day: '25',
//     month: '07',
//     hour: '18:00',
//     teamA: ['', '', '', '', '', '', ''],
//     teamB: ['', '', '', '', '', '', '']
//   };
// };

export const Home = () => {
	const { lastGame, isLoadingLastGame, lastGameError } = useFetchLastGame();

	const methods = useForm<Game>({
		defaultValues: {...lastGame},
	});
	// const { data: game, isLoading } = useQuery<Game>({ queryKey: ["updateGame"] }, fetchGame);

	// console.log(game)

	// const mutation = useUpdateGameMutation();

	const onSubmit = (data: Game) => {
		// mutation.mutate(data);
		console.log(data);
	};

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<TeamComponent teamName='teamA' />
				<TeamComponent teamName='teamB' />
				<button type='submit'>Enviar</button>
			</form>
		</FormProvider>
	);
};
