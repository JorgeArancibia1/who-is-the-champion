// import { useState } from 'react';
import "./App.css";
import { Navigation } from "./routes/Navigation";

export const App = () => {
	// const [players, setPlayers] = useState({});
	// console.log(players);



	// useEffect(() => {
	// 	try {
	// 		fetch("http://localhost:3000/api/games", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(game),
	// 		})
	// 			.then((response) => response.json())
	// 			.then((data) => console.log(data))
	// 			.catch((error) => console.log(error));
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }, [game]);

	return (
		<div className='section'>
			{/* <Home /> */}
			<Navigation />
			{/* <Admin /> */}
		</div>
	);
};
