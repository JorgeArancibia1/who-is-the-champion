import { FieldValues, UseFormRegister } from "react-hook-form";

export interface TeamComponentProps {
	teamName: "teamA" | "teamB";
	teamData: string[];
	register: UseFormRegister<FieldValues> | undefined;
	changeTeam: (index: number, value: string, team: "teamA" | "teamB") => void;
}

export interface Team {
	teamA: string[];
	teamB: string[];
}

// export type TeamType = {
// 	TeamName: 'teamA' | 'teamB';
// };
