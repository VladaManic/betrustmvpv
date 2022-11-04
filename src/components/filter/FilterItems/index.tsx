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
	const game = store.getGameData();
	const groupObject: GroupObj[] = store.getGroupsArr()
	// const groupObject: Groups[] = [{
	// 		id: 1,
	// 		name: 'All', 
	// 		count: game.markets_count,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Match',
	// 		count: store.getGroup('Match').length,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Handicaps',
	// 		count: store.getGroup('Handicaps').length,
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Totals',
	// 		count: store.getGroup('Totals').length,
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Combos',
	// 		count: store.getGroup('Combos').length,
	// 	}
	// ]

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
		e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
		setActiveClass(button.name)
		if(button.name === 'All'){
			const currentData = game.market
			//Sort markets before setting them to mobX
			const currentDataSorted = orderBy(currentData, ['group_order', 'order']);
			store.addGroup(currentDataSorted)
		} else {
			const currentData = store.getGroup(button.name)
			//Sort markets before setting them to mobX
			const currentDataSorted = orderBy(currentData, ['order']);
			store.addGroup(currentDataSorted)
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