import store from '../store/store'

// Types
import { IReplacement } from '../types/interfaces';

const improveName = (name: string, market: boolean) => {
	let replacmentName = '' as string;
	const team1Name = store.getTeam1Name();
	const team2Name = store.getTeam2Name();

	const replacement = {
		'Team 1': team1Name,
		'team 1': team1Name,
		'Team 2': team2Name,
		'team 2': team2Name,
		team1: team1Name,
		team2: team2Name,
		W1: team1Name,
		W2: team2Name,
		'W 1': team1Name,
		'W 2': team2Name,
		Team1: team1Name,
		Team2: team2Name,
		Home: team1Name,
		Away: team2Name,
	} as IReplacement;

	if(market){
		const re = new RegExp(Object.keys(replacement).join('|'), 'gi');
		const matches = name.match(re);
		if (matches) {
			const matchedKey = replacement[matches[0]];
			replacmentName = name.replace(matches[0], matchedKey);
		} else {
			replacmentName = name;
		}
	} else if (Object.hasOwn(replacement, name)) {
		replacmentName = replacement[name];
	} else {
		replacmentName = name;
	}

	return replacmentName;
}

export default improveName