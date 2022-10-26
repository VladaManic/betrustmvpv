import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import dress from '../../../assets/img/dress.svg';

// Styles
import { ScoreWrap, Dress } from './style';

const Score = () => {
	return (
		<ScoreWrap>
			<p className="name-first">{store.sportData[0].region[0].competition[0].game[0].team1_name}</p>
			<div className="dress-first"><Dress src={ dress } alt="1. team dress" /></div>
			<p className="score-first">{store.sportData[0].region[0].competition[0].game[0].info.score1}</p>
			<p className="middle-separator">:</p>
			<p className="score-second">{store.sportData[0].region[0].competition[0].game[0].info.score2}</p>
			<div className="dress-second"><Dress src={ dress } alt="2. team dress" /></div>
			<p className="name-second">{store.sportData[0].region[0].competition[0].game[0].team2_name}</p>
		</ScoreWrap>
	)
}

export default observer(Score)