import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Styles
import { FilterInner, FilterItem } from './style';

const FilterItems = () => {
	interface Groups {
		id: number,
		name: string,
		count: number
	}
	const game = store.sportData[0].region[0].competition[0].game[0];
	const groupObject: Groups[] = [{
			id: 1,
			name: 'All', 
			count: game.markets_count,
		},
		{
			id: 2,
			name: 'Match',
			count: 33,
		},
		{
			id: 3,
			name: 'Handicaps',
			count: 22
		},
		{
			id: 4,
			name: 'Totals',
			count: 33,
		},
		{
			id: 5,
			name: 'Combos',
			count: 33,
		}
	]

	return (
		<FilterInner>
			{ groupObject.map((singleGroup: Groups) => (
				<FilterItem key={ singleGroup.id }>{ singleGroup.name } ({ singleGroup.count })</FilterItem> 
			))}
		</FilterInner>
	)
}

export default observer(FilterItems)