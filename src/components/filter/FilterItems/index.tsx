import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'
import { orderBy } from 'lodash';

import FilterBtn from '../FilterBtn'

// Styles
import { FilterWrap } from './style';

// Types
import { GroupObj } from '../../../types/interfaces';

const FilterItems = () => {
	const groupObject: GroupObj[] = store.groupsArr

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const button: HTMLButtonElement = e.currentTarget;
		store.setCurrentGroupName(button.name);
		if(button.name === 'All'){
			const currentData = store.allMarkets;
			//Sort markets before setting them to mobX
			const currentDataSorted = orderBy(currentData, ['group_order', 'order']);
			//Setting selected group markets to mobX
			store.setCurrentGroup(currentDataSorted)
		} else {
			const currentData = store.group
			//Sort markets before setting them to mobX
			const currentDataSorted = orderBy(currentData, ['order']);
			//Setting selected group markets to mobX
			store.setCurrentGroup(currentDataSorted)
		}
	}

	return (
		<FilterWrap>
			{ groupObject.map((singleGroup: GroupObj) => (
				<FilterBtn key={ singleGroup.id } singleGroup={singleGroup} onClick={clickHandler} />
			))}
		</FilterWrap>
	)
}

export default observer(FilterItems)