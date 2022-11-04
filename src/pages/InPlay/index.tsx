import React from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'
import { orderBy } from 'lodash';

import Breadcrumb from '../../components/intro/Breadcrumb'
import Intro from '../../layout/Intro'
import Filter from '../../layout/Filter'
import Markets from '../../layout/Markets'

const InPlay = () => {
	const currentGroup = store.allMarkets;
	//Sort markets before setting them to mobX
	const currentGroupSorted = orderBy(currentGroup, ['group_order', 'order']);
	store.setGroup(currentGroupSorted)

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