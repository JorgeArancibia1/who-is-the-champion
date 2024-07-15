import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputPlayer } from "../components/inputPlayer";
import { Game } from "../interfaces";

export const Home = () => {
	const [game, setGame] = useState({} as Game);
	const [teamA, setTeamA] = useState([]);
	const [teamB, setTeamB] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/games/last");
			const data = await response.json();
			console.log(data);
			// Update the state with the fetched data
			setGame(data);
			console.log("GAME => ", game);
			// setTeamA(data.teamA);
			// setTeamB(data.teamB);
		} catch (error) {
			console.log(error);
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit((teamA: string[]) => {
		console.log({ teamA });
		setGame((prev) => ({
			...prev,
			teamA: teamA,
		}));
		// setTeamA(data.teamA);
		// setTeamB(data.teamB);
	});

	return (
		<div>
			{game !== undefined && game !== null ? (
				<>
					<h1>{`Partido ${game.day} de ${game.month}`}</h1>
					<h1>{game.hour}</h1>
					<h1>{game.place}</h1>
				</>
			) : (
				<h1>Loading...</h1>
			)}

			{errors.place && <p>Hubo un error con la dirección.</p>}

			<form onSubmit={onSubmit} className='container mt-10'>
				<div>
					<h2>Equipo A</h2>
					<div className='players-container'>
						{game !== undefined &&
							game?.teamA?.map((player, index) => (
								<InputPlayer
									register={register}
									index={index}
									key={index}
									player={player}
								/>
							))}
					</div>
					<input type='submit' value='Guardar' />
				</div>

				<div>
					<h2>Equipo B</h2>
					<div className='players-container'>
						<div className='container-player-input'>
							1. <input value='Jugador' type='text' />
						</div>
						<div className='container-player-input'>
							2. <input value='Jugador' type='text' />{" "}
						</div>
						<div className='container-player-input'>
							3. <input value='Jugador' type='text' />{" "}
						</div>
						<div className='container-player-input'>
							4. <input value='Jugador' type='text' />{" "}
						</div>
						<div className='container-player-input'>
							5. <input value='Jugador' type='text' />{" "}
						</div>
						<div className='container-player-input'>
							6. <input value='Jugador' type='text' />{" "}
						</div>
						<div className='container-player-input'>
							7. <input value='Jugador' type='text' />{" "}
						</div>
						{/* <button className='text-green-500'>Confirmar</button> */}
						<input type='submit' value='Guardar' />
					</div>
				</div>
			</form>
			<h2>Reservas</h2>
			<div className='container-player-input text-gray-400'>
				1. <input type='text' /> <button>Confirmar</button>
			</div>
			<div className='container-player-input mt-4'>
				2. <input type='text' /> <button>Confirmar</button>
			</div>
		</div>
	);
};
