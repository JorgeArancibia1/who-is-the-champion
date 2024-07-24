import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
	register: UseFormRegister<FieldValues> | undefined;
	index: number;
	player: string;
	team: string;
	changeTeam: (index: number, value: string, team: string) => void;
}

export const InputPlayer: FC<Props> = ({
	register = () => {},
	changeTeam = () => {},
	index,
	player = "Jugador",
	team = "teamA",
}) => {
	console.log(player);
	return (
		<div className='container-player-input text-gray-400 mb-2'>
			{index + 1}.{" "}
			<input
				{...register(`${team}.${index}.value`)}
				// value={player}
				type='text'
				onChange={() => changeTeam(index, player, team)}
			/>{" "}
		</div>
	);
};
