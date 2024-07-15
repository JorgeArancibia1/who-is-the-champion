import { useEffect, useState } from "react";
import { Game } from "../../interfaces";

const TABLE_HEAD = ["Lugar", "Día", "Mes", "Hora"];

// const TABLE_ROWS = [
// 	{
// 		id: "6689efc63ee551b3ef2d5242",
// 		place: "Laurita Vicuña",
// 		day: "15",
// 		month: "Febrero",
// 		hour: "15:00",
// 		teamA: [],
// 		teamB: [],
// 	},
// 	{
// 		id: "6689efc63ee551b3ef2d5241",
// 		place: "Luis Matte",
// 		day: "15",
// 		month: "Agosto",
// 		hour: "15:00",
// 		teamA: [],
// 		teamB: [],
// 	},
// 	{
// 		id: "6689efc63ee551b3ef2d5243",
// 		place: "Luis Matte",
// 		day: "15",
// 		month: "Marzo",
// 		hour: "15:00",
// 		teamA: [],
// 		teamB: [],
// 	},
// 	{
// 		id: "6689efc63ee551b3ef2d5244",
// 		place: "Luis Matte",
// 		day: "15",
// 		month: "Mayo",
// 		hour: "15:00",
// 		teamA: [],
// 		teamB: [],
// 	},
// 	{
// 		id: "6689efc63ee551b3ef2d5245",
// 		place: "Luis Matte",
// 		day: "15",
// 		month: "Abril",
// 		hour: "15:00",
// 		teamA: [],
// 		teamB: [],
// 	},
// ];

// Realizar una llamada a la api con async await
// const response = await fetch("http://localhost:3000/api/game");
// const data = await response.json();
// console.log(data);

// fetch("http://localhost:3000/api/game").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

export function TableWithStripe() {
	const [games, setGames] = useState([] as Game[]);

	useEffect(() => {
		fetch("http://localhost:3000/api/games")
			.then((response) => response.json())
			.then((data) => setGames(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<table className='w-full min-w-max table-auto text-left'>
			<thead>
				<tr>
					{TABLE_HEAD.map((head) => (
						<th
							key={head}
							className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
						>
							{head}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{games.map(({ place, day, month, hour }, index) => (
					<tr key={index} className='even:bg-blue-gray-50/50'>
						<td className='p-4'>{place}</td>
						<td className='p-4'>{day}</td>
						<td className='p-4'>{month}</td>
						<td className='p-4'>{hour}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
