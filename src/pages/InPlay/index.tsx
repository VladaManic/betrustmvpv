import React from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'

import Breadcrumb from '../../components/intro/Breadcrumb'
import Intro from '../../layout/Intro'
import Filter from '../../layout/Filter'
import Markets from '../../layout/Markets'

const InPlay = () => {
	interface MarketObj {
		id: string,
	}
	const currentGroup = store.sportData[0].region[0].competition[0].game[0].market
	//Sort markets before setting them to mobX
	const currentGroupSorted = currentGroup.slice().sort((a: MarketObj, b: MarketObj) => parseInt(a.id) - parseInt(b.id));
	store.addGroup(currentGroupSorted)

	return (
		<div>
			<Breadcrumb />
			<Intro />
			<Filter />
			<Markets />
		</div>
	)
}

export default observer(InPlay)