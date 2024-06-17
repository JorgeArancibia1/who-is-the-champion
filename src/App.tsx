// import { useState } from 'react';
import './App.css';

function App() {
	// const [players, setPlayers] = useState({});
	// console.log(players);

	return (
		<div className='section'>
			<h1>Partido Domingo 16 de Junio</h1>
			<h1>16:00</h1>
			<h1>Laurita Vicuña - Av. Ejército Libertador 2341</h1>
			<div className='container mt-10'>
				<div>
					<h2>Equipo A</h2>
					<div className='players-container'>
						<div className='container-player-input text-gray-400'>
							1. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							2. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							3. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							4. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							5. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							6. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							7. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
					</div>
				</div>

				<div>
					<h2>Equipo B</h2>
					<div className='players-container'>
						<div className='container-player-input'>
							1. <input value="Jugador" type='text' /> <button className='text-green-500'>Confirmar</button>
							<button>Anular</button>
						</div>
						<div className='container-player-input'>
							2. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							3. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							4. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							5. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							6. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
						<div className='container-player-input'>
							7. <input value="Jugador" type='text' /> <button>Confirmar</button>
						</div>
					</div>
				</div>
			</div>
			<h2>Reservas</h2>
			<div className='container-player-input text-gray-400'>
				1. <input type='text' /> <button>Confirmar</button>
			</div>
			<div className='container-player-input mt-4'>
				2. <input type='text' /> <button>Confirmar</button>
			</div>
		</div>
	);
}

export default App;
