import { FC } from "react";
import InputPlayer from "../InputPlayer/InputPlayer";

// interface TeamComponentProps {
//   teamName: 'teamA' | 'teamB';
//   teamData: string[];
// 	register: UseFormRegister<Team>;
// 	changeTeam: (index: number, value: string, team: string) => void;
// }

interface TeamComponentProps {
	teamName: string;
}

const TeamComponent: FC<TeamComponentProps> = ({ teamName }) => {

  return (
    <div>
      <h3>{teamName.replace('team', 'Team ')}</h3>
      {Array.from({ length: 7 }).map((_, index) => (
        <InputPlayer key={index} name={`${teamName}.${index}`} index={index} />
      ))}
    </div>
  );
};

export default TeamComponent;
