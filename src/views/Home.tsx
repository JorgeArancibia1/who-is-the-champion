/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import TeamComponent from '../components/TeamComponent/TeamComponent';
import { useFetchLastGame } from '../hooks/games/useFetchLastGame';
import { useUpdateGameMutation } from '../hooks/games/useUpdateGameMutation';
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

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

interface InputsProps {
	id: string;
	place: string;
	day: string;
	month: string;
	hour: string;
	teamA: string[];
	teamB: string[];
}

export const Home = () => {
	const { lastGame, isLoadingLastGame, lastGameError } = useFetchLastGame();
	console.log({ lastGame });

	// const { updateGameQuery } = useUpdateGame(lastGame?._id ?? "");
	const updateGame = useUpdateGameMutation(lastGame?.id ?? '');

	// console.log({ lastGame });

	const methods = useForm<InputsProps>({
		// TODO: Cambiar valores por defecto
		defaultValues: {
			place: lastGame?.place,
			day: lastGame?.day,
			month: lastGame?.month,
			hour: lastGame?.hour,
			teamA: lastGame?.teamA ?? ['', '', '', '', '', '', ''],
			teamB: lastGame?.teamB ?? ['', '', '', '', '', '', ''],
		},
	});

	// const newTeamA = methods.watch('teamA');
	useEffect(() => {
		methods.reset({
			...methods.getValues(),
			teamA: lastGame?.teamA ?? ['', '', '', '', '', '', ''],
			teamB: lastGame?.teamB ?? ['', '', '', '', '', '', ''],
		});
	}, [lastGame, methods]);

	if (updateGame.isError) {
		return <div>{`${updateGame.error}`}</div>;
	}

	if (isLoadingLastGame) {
		return <div>Loading...</div>;
	}

	const onSubmit: SubmitHandler<InputsProps> = (data) => {
		console.log(data);
		updateGame.mutate(data);
		// console.log(updateGame.data);
	};

	// MySwal.fire({
	// 	title: <p>Hello World</p>,
	// 	didOpen: () => {
	// 		// `MySwal` is a subclass of `Swal` with all the same instance & static methods
	// 		MySwal.showLoading()
	// 	},
	// }).then(() => {
	// 	return MySwal.fire(<p>Shorthand works too</p>)
	// })

	// useEffect(() => {
		if (updateGame.isSuccess) {
			MySwal.fire({
				title: <p>Ya estás inscrito</p>,
				icon: 'success',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	// }, [updateGame.isSuccess]);

	return (
		<FormProvider {...methods}>
			{lastGame !== undefined && lastGame !== null && !isLoadingLastGame && (
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<h1 className='text-4xl font-bold'>{`Partido ${lastGame.day} de ${lastGame.month}`}</h1>
					<h1 className='text-3xl'>{lastGame.hour}</h1>
					<h1 className='text-2xl mb-4'>{lastGame.place}</h1>
					<div className='grid md:grid-cols-2 gap-8'>
						<TeamComponent teamName='teamA' teamColor='blue' />
						<TeamComponent teamName='teamB' teamColor='red' />
					</div>
					<button
						className='mt-4 w-full bg-gray-800 hover:bg-gray-700 text-white'
						type='submit'
					>
						Enviar
					</button>
				</form>
			)}

			{!!lastGameError && <p>Hubo un error con la dirección.</p>}
		</FormProvider>
	);
};
