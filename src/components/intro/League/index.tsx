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
			<p>{ store.region } / { store.competition }</p>
		</LeagueWrap>
	)
}

export default observer(League)