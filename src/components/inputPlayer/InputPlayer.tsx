import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { Team } from "../../interfaces";

interface Props {
	register: UseFormRegister<Team>;
	index: number;
	player: string;
	team: "teamA" | "teamB";
	changeTeam: (index: number, value: string, team: string) => void;
}

export const InputPlayer: FC<Props> = ({
	register,
	changeTeam,
	index,
	player = "Jugador",
	team = "teamA",
}) => {
	console.log(player);
	return (
		<div className='container-player-input text-gray-400 mb-2'>
			{index + 1}.{" "}
			<input
				{...register(`${team}.${index}`)}
				// value={player}
				type='text'
				onChange={() => changeTeam(index, player, team)}
			/>{" "}
		</div>
	);
};
