import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

// interface Props {
// 	register: UseFormRegister<Team>;
// 	index: number;
// 	player: string;
// 	team: "teamA" | "teamB";
// 	changeTeam: (index: number, value: string, team: string) => void;
// }

interface InputPlayerProps {
	name: string;
	index: number;
}

const InputPlayer: FC<InputPlayerProps> = ({ name, index }) => {
  const { control } = useFormContext();

	console.log(control)

  return (
    <div>
      <label>Jugador {index + 1}:</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input {...field ?? ''} />}
      />
    </div>
  );
};

export default InputPlayer;
