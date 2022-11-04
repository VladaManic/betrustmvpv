import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

import UpDress from '../Assets/upDress'
import DownDress from '../Assets/downDress'

// Styles
import { ScoreWrap } from './style';

const Score = () => {
	const game = store.gameData;
	const team1Up: string = '#' + game.info.shirt1_color
	const team1Down: string = '#' + game.info.short1_color
	const team2Up: string = '#' + game.info.shirt2_color
	const team2Down: string = '#' + game.info.short2_color

	return (
		<ScoreWrap>
			<p className="name-first">{game.team1_name}</p>
			<div className="dress-first">
				<div className="dress-up">
					<UpDress fill={ team1Up } />
				</div>
				<div className="dress-down">
					<DownDress fill={ team1Down } />
				</div>
			</div>
			<p className="score-first">{game.info.score1}</p>
			<p className="middle-separator">:</p>
			<p className="score-second">{game.info.score2}</p>
			<div className="dress-second">
				<div className="dress-up">
					<UpDress fill={ team2Up } />
				</div>
				<div className="dress-down">
					<DownDress fill={ team2Down } />
				</div>
			</div>
			<p className="name-second">{game.team2_name}</p>
		</ScoreWrap>
	)
}

export default observer(Score)