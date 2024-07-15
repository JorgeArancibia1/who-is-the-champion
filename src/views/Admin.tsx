import { useState } from "react";
import { useForm } from "react-hook-form";
import { TableWithStripe } from "../components/table";
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
		formState: { errors },
	} = useForm<Game>();

	const onSubmit = handleSubmit((values) => {
		values.teamA = ["koke"];
		values.teamB = [];
		setGame(values);
		console.log("VALUES => ", values);
		console.log("GAME => ", game);
		createGame();
		// setTeamB(values.teamB);
	});

	const createGame = async() => {
		try {
			const response = await fetch("http://localhost:3000/api/games", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(game),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
		// window.location.reload();
	};

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
