import React from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'
import { orderBy } from 'lodash';

import Breadcrumb from '../../components/intro/Breadcrumb'
import Intro from '../../layout/Intro'
import Filter from '../../layout/Filter'
import Markets from '../../layout/Markets'

const InPlay = () => {
	const firstGroup = store.allMarkets;
	//Sort markets before setting them to mobX
	const firstGroupSorted = orderBy(firstGroup, ['group_order', 'order']);
	store.setCurrentGroup(firstGroupSorted)
	store.setCountArr(firstGroup);

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