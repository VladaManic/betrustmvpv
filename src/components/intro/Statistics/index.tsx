import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import yellowCard from '../../../assets/img/yellow-card.svg';
import redCard from '../../../assets/img/red-card.svg';
import cornerIcon from '../../../assets/img/corner.svg';

// Styles
import { YellowCard, RedCard, CornerIcon } from './style';

const Statistics = () => {
	// const clickHandler = () => {
	// 	console.log(store.sportData[0].region[0].competition[0].game[0].team1_name);
	// 	console.log(store.sportData[0].region[0].competition[0].game[0].team2_name);
	// 	console.log(store.sportData[0].region[0].competition[0].game[0].info.current_game_time);
	// }

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td>{store.sportData[0].region[0].competition[0].game[0].team1_name}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.score_set1.team1_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.score_set2.team1_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.foul.team1_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.red_card.team1_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.corner.team1_value}</td>
					</tr>
					<tr>
						<td>{store.sportData[0].region[0].competition[0].game[0].team2_name}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.score_set2.team2_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.score_set2.team2_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.foul.team2_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.red_card.team2_value}</td>
						<td>{store.sportData[0].region[0].competition[0].game[0].stats.corner.team2_value}</td>
					</tr>
					<tr>
						<td>{store.sportData[0].region[0].competition[0].game[0].info.current_game_time}'</td>
						<td>R</td>
						<td>HT</td>
						<td><YellowCard src={ yellowCard } alt="Yellow card icon" /></td>
						<td><RedCard src={ redCard } alt="Red card icon" /></td>
						<td><CornerIcon src={ cornerIcon } alt="Corner icon" /></td>
					</tr>
				</tbody>
			</table>
			{/* <button onClick = { clickHandler }>Click</button> */}
		</div>
	)
}

export default observer(Statistics)