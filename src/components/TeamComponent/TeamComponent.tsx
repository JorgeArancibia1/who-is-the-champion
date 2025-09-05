import { FC } from 'react';
import { InputPlayer } from '../InputPlayer';
// import { InputPlayer } from '../InputPlayer/InputPlayer';

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
			className={`py-6 m-6 space-y-4 rounded-lg flex flex-col items-center ${
				teamColor === 'blue' ? 'bg-green-500/30 shadow-lg' : 'bg-green-500/30 shadow-lg'
			}`}
		>
			<h3
				className={`text-lg font-semibold mb-4 ${
					teamColor === 'blue' ? 'text-blue-400' : 'text-white-400'
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
