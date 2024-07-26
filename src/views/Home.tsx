/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TeamComponent } from "../components/TeamComponent";
import { Game } from "../games/interfaces/games.interface";
import { useFetchLastGame } from "../hooks/games/useFetchLastGame";
import { updateGame } from "../hooks/games/useUpdateGame";
// import { Team } from "../interfaces";

interface FormInputs {
	game: Game;
}

interface FormInputs2 {
	teamA: string[];
	teamB: string[];
}

export const Home = () => {
	// const [game, setGame] = useState({} as Game);
	const [teamA, setTeamA] = useState(Array(7).fill(""));
	const [teamB, setTeamB] = useState(Array(7).fill(""));
	const [team, setTeam] = useState(Array(7).fill(""));

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const { lastGame, isLoadingLastGame, lastGameError } = useFetchLastGame();

	const mutation = useMutation((game: Game) => updateGame(game._id), {
		onSuccess: (data: unknown) => {
			console.log('Actualización exitosa', data);
		},
		onError: (error: Error) => {
			console.log('Error en la actualización', error);
		},
	});

	if (isLoadingLastGame) return <div>Loading...</div>;
	if (lastGameError) return <div>An error occurred: {lastGameError}</div>;

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		console.log(data);
		mutation.mutate(data.game);
	};

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

			{errors && <p>Hubo un error con la dirección.</p>}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='container mt-10 border'
			>
				{!isLoadingLastGame && (
					<>
						<div className='container'>
							<TeamComponent
								teamName='teamA'
								teamData={lastGame?.teamA || []}
								register={register}
								changeTeam={updateTeam2}
							/>
							<TeamComponent
								teamName='teamB'
								teamData={lastGame?.teamB || []}
								register={register}
								changeTeam={updateTeam2}
							/>
						</div>
						<button type='submit' className='border m-0 p-0 h-10'>
							Inscribete
						</button>
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
