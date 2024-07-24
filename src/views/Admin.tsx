import { useState } from "react";
import { useForm } from "react-hook-form";
import { TableWithStripe } from "../components/Table";
import { useCreateGames } from "../hooks/games/useCreateGame";
import { Game } from "../interfaces";

export const Admin = () => {
	const [game, setGame] = useState({} as Game);

	const mockGame = {
		place: "Luis Matte",
		day: "20",
		month: "Julio",
		hour: "16:00 hrs",
		teamA: [],
		teamB: [],
	};

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<Game>();

	const onSubmit = handleSubmit((values) => {
		// values.teamA = ["koke"];
		// values.teamB = [];
		setGame(values);
		console.log("VALUES => ", values);
		console.log("GAME => ", game);
		// setTeamB(values.teamB);
	});

	const { createGameQuery } =
	useCreateGames(game ?? mockGame);

    console.log({createGameQuery});

	return (
		<div className='games'>
			<h2>Partidos</h2>
			<div className='gameTable'>
				<TableWithStripe />
			</div>
			<div className='create-game'>
				<h2>Crear Partido</h2>
				<form
					// onSubmit={handleSubmit(onSubmit)}
					onSubmit={onSubmit}
					className='container-player-input'
				>
					<input
						{...register("place", { required: true })}
						type='text'
						placeholder='Lugar'
					/>
					<input
						{...register("day", { required: true })}
						type='text'
						placeholder='Día'
					/>
					<input
						{...register("month", { required: true })}
						type='text'
						placeholder='Mes'
					/>
					<input
						{...register("hour", { required: true })}
						type='text'
						placeholder='Hora'
					/>
					{/* <button onClick={createGame}>Crear</button> */}
					<button className='pointer' type='submit' value='Crear Juego'>
						Crear
					</button>
				</form>
			</div>
		</div>
	);
};
