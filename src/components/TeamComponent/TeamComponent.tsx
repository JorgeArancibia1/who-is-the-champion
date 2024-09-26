import { FC } from 'react';
import { InputPlayer } from '../InputPlayer/InputPlayer';

// interface TeamComponentProps {
//   teamName: 'teamA' | 'teamB';
//   teamData: string[];
// 	register: UseFormRegister<Team>;
// 	changeTeam: (index: number, value: string, team: string) => void;
// }

interface TeamComponentProps {
	teamName: string;
	teamColor: string;
}

const TeamComponent: FC<TeamComponentProps> = ({ teamName, teamColor }) => {
	return (
		<div
			className={`p-6 space-y-4 rounded-lg  ${
				teamColor === 'blue' ? 'bg-blue-900/30' : 'bg-red-900/30'
			}`}
		>
			<h3
				className={`text-lg font-semibold ${
					teamColor === 'blue' ? 'text-blue-400' : 'text-red-400'
				}`}
			>
				{teamName.replace('team', 'Team ')}
			</h3>
			{Array.from({ length: 7 }).map((_, index) => (
				<InputPlayer key={index} name={`${teamName}.${index}`} index={index} colorUser={`${teamColor}`}/>
			))}
		</div>
	);
};

export default TeamComponent;
