export interface Game {
  id?: string;
	_id?: string;
	place: string;
	day: string;
	month: string;
	hour: string;
	teamA: string[];
	teamB: string[];
	__v?: number;
}