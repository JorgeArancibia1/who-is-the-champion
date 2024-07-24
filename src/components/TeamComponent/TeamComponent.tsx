import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputPlayer } from "../InputPlayer";

interface TeamComponentProps {
  teamName: 'teamA' | 'teamB';
  teamData: string[];
	register: UseFormRegister<FieldValues> | undefined;
	changeTeam: (index: number, value: string, team: string) => void;
}

export const TeamComponent: FC<TeamComponentProps> = ({
	teamName,
	teamData,
	register,
	changeTeam
}) => {
	return (
		<div>
			<h2>{`Team ${teamName}`}</h2>
			{teamData.map((player, index) => (
				<InputPlayer
					key={index}
					index={index}
					player={player}
					team={teamName}
					register={register}
					changeTeam={() => changeTeam(index, player, teamName)}
				/>
			))}
		</div>
	);
};
