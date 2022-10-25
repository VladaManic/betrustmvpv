import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import dress from '../../../assets/img/dress.svg';

// Styles
import { Dress } from './style';

const Score = () => {
	return (
		<div>
			<h2>{store.sportData[0].region[0].competition[0].game[0].info.score1}</h2>
			<div><Dress src={ dress } alt="1. team dress" /></div>
			<h2>{store.sportData[0].region[0].competition[0].game[0].team1_name}</h2>
			<p>:</p>
			<h2>{store.sportData[0].region[0].competition[0].game[0].team2_name}</h2>
			<div><Dress src={ dress } alt="2. team dress" /></div>
			<h2>{store.sportData[0].region[0].competition[0].game[0].info.score2}</h2>
		</div>
	)
}

export default observer(Score)