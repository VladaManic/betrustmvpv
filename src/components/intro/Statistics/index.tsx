import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import yellowCard from '../../../assets/img/yellow-card.svg';
import redCard from '../../../assets/img/red-card.svg';
import cornerIcon from '../../../assets/img/corner.svg';

// Styles
import { StatisticsWrap, YellowCard, RedCard, CornerIcon } from './style';

const Statistics = () => {
	const game = store.getGameData();

	return (
		<StatisticsWrap>
			<table>
				<tbody>
					<tr>
						<td>{game.team1_name}</td>
						<td>{game.stats.score_set1.team1_value}</td>
						<td className="text-focus">{game.stats.score_set2.team1_value}</td>
						<td>{game.stats.foul.team1_value}</td>
						<td>{game.stats.red_card.team1_value}</td>
						<td>{game.stats.corner.team1_value}</td>
					</tr>
					<tr>
						<td>{game.team2_name}</td>
						<td>{game.stats.score_set2.team2_value}</td>
						<td className="text-focus">{game.stats.score_set2.team2_value}</td>
						<td>{game.stats.foul.team2_value}</td>
						<td>{game.stats.red_card.team2_value}</td>
						<td>{game.stats.corner.team2_value}</td>
					</tr>
					<tr>
						<td className="text-focus">{game.info.current_game_time}'</td>
						<td className="text-grey">R</td>
						<td className="text-grey">HT</td>
						<td><YellowCard src={ yellowCard } alt="Yellow card icon" /></td>
						<td><RedCard src={ redCard } alt="Red card icon" /></td>
						<td><CornerIcon src={ cornerIcon } alt="Corner icon" /></td>
					</tr>
				</tbody>
			</table>
		</StatisticsWrap>
	)
}

export default observer(Statistics)