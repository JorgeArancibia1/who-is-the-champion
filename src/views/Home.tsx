import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { TeamComponent } from "../components/TeamComponent";
import { useFetchLastGame } from "../hooks/games/useFetchLastGame";
import { Game } from "../interfaces";

export const Home = () => {
	const [game, setGame] = useState({} as Game);
	const [teamA, setTeamA] = useState(Array(7).fill(""));
	const [teamB, setTeamB] = useState(Array(7).fill(""));
	const [team, setTeam] = useState(Array(7).fill(""));

	const updateTeam = (
		index: number,
		value: ChangeEvent<HTMLInputElement> | string,
		team: string
	) => {
		console.log({ index, value, team });
		const newTeamA = [...teamA];
		newTeamA[index] = value;
		setTeamA(newTeamA);
		setGame((prevGame) => ({
			...prevGame,
			teamA: newTeamA,
		}));
	};

	const updateTeamB = (index: number, value: ChangeEvent<HTMLInputElement>) => {
		const newTeamA = [...teamA];
		newTeamA[index] = value;
		setTeamA(newTeamA);
		setGame((prevGame) => ({
			...prevGame,
			teamA: newTeamA,
		}));
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { lastGame, isLoadingLastGame, lastGameError } = useFetchLastGame();

	// const game = lastGame ?? []; // Para evitar que sea undefined

	// console.log({ lastGame, isLoadingLastGame, lastGameError });
	// console.log({games, lastGame, isLoading, games: lastGame?.teamA});

	const onSubmit = handleSubmit((props) => {
		console.log(props);
		// console.log({ team });
		// setGame((prev) => ({
		// 	...prev,
		// 	[team]: team,
		// }));
	});

	// Mutación para actualizar los datos
	// const mutation = useMutation(updateGame, {
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries(['game']);
	// 	},
	// });

	// Manejar el envío de la actualización
	// const handleUpdate = () => {
	//   mutation.mutate({ teamA: localTeamA });
	// };

	if (isLoadingLastGame) return <div>Loading...</div>;
	if (lastGameError) return <div>An error occurred: {lastGameError}</div>;

	return (
		<div>
			{lastGame !== undefined && lastGame !== null ? (
				<>
					<h1>{`Partido ${lastGame.day} de ${lastGame.month}`}</h1>
					<h1>{lastGame.hour}</h1>
					<h1>{lastGame.place}</h1>
				</>
			) : (
				<h1>Loading...</h1>
			)}

			{errors.place && <p>Hubo un error con la dirección.</p>}

			<form onSubmit={onSubmit} className='container mt-10 border'>
				{!isLoadingLastGame && (
					<>
						<div className="container">
							<TeamComponent
								teamName='teamA'
								teamData={lastGame?.teamA || []}
								register={register}
								changeTeam={updateTeam}
							/>
							<TeamComponent
								teamName='teamB'
								teamData={lastGame?.teamB || []}
								register={register}
								changeTeam={updateTeam}
							/>
						</div>
						<input
							type='submit'
							value='Inscribete'
							className='border m-0 p-0 h-10'
						/>
					</>
				)}
				{}
			</form>
			{/* <h2>Reservas</h2>
			<div className='container-player-input text-gray-400'>
				1. <input type='text' /> <button>Confirmar</button>
			</div>
			<div className='container-player-input mt-4'>
				2. <input type='text' /> <button>Confirmar</button>
			</div> */}
		</div>
	);
};
