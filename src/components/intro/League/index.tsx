import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Assets
import flag from '../../../assets/img/mongolia.svg';

// Styles
import { LeagueWrap, Flag } from './style';

const League = () => {
	return (
		<LeagueWrap>
			<Flag src={ flag } alt="Flag" />
			<p>{ store.sportData[0].region[0].name } / { store.sportData[0].region[0].competition[0].name }</p>
		</LeagueWrap>
	)
}

export default observer(League)