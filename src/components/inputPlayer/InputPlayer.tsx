import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues> | undefined;
  index: number;
  player: string;
}

export const InputPlayer: FC<Props> = ({register = ()=>{}, index, player="Jugador"}) => {
  console.log(player);
	return (
		<div className='container-player-input text-gray-400'>
			{index + 1}. <input {...register(`teamA.${index}.value`)} value={player} type='text' />{" "}
		</div>
	);
};
