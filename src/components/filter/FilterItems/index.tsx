import React from 'react'
import { observer } from "mobx-react"
import store from '../../../store/store'

// Styles
import { FilterInner, FilterItem } from './style';

const FilterItems = () => {
	interface Groups {
		id: number,
		name: string,
		count: number,
		className: string
	}
	const game = store.sportData[0].region[0].competition[0].game[0];
	const groupObject: Groups[] = [{
			id: 1,
			name: 'All', 
			count: game.markets_count,
			className: 'active',
		},
		{
			id: 2,
			name: 'Match',
			count: store.getGroup('Match').length,
			className: ''
		},
		{
			id: 3,
			name: 'Handicaps',
			count: store.getGroup('Handicaps').length,
			className: ''
		},
		{
			id: 4,
			name: 'Totals',
			count: store.getGroup('Totals').length,
			className: ''
		},
		{
			id: 5,
			name: 'Combos',
			count: store.getGroup('Combos').length,
			className: ''
		}
	]

	return (
		<FilterInner>
			{ groupObject.map((singleGroup: Groups) => (
				<FilterItem key={ singleGroup.id }><button className={ singleGroup.className }>{ singleGroup.name } ({ singleGroup.count })</button></FilterItem> 
			))}
		</FilterInner>
	)
}

export default observer(FilterItems)