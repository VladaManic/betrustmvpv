import React, { useState } from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'
import { orderBy } from 'lodash';
import clsx from 'clsx';

// Styles
import { FilterWrap, FilterItemWrap } from './style';

// Types
import { GroupObj } from '../../../types/interfaces';

const FilterItems = () => {
	const [activeClass, setActiveClass] = useState<String | undefined>('All')
	const game = store.gameData;
	const groupObject: GroupObj[] = store.groupsArr

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
		setActiveClass(button.name)
		store.setCurrentGroupName(button.name);
		if(button.name === 'All'){
			const currentData = game.market
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
				<FilterItemWrap key={ singleGroup.id }>
					<button className={clsx(activeClass === singleGroup.name ? 'active' : '')} name={ singleGroup.name } onClick={clickHandler}>{ singleGroup.name } ({ singleGroup.count })</button>
				</FilterItemWrap> 
			))}
		</FilterWrap>
	)
}

export default observer(FilterItems)