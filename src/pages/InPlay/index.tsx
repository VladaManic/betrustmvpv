import React from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'

import Breadcrumb from '../../components/intro/Breadcrumb'
import Intro from '../../layout/Intro'
import Filter from '../../layout/Filter'
import Markets from '../../layout/Markets'

const InPlay = () => {
	const currentGroup = store.sportData[0].region[0].competition[0].game[0].market
	store.addGroup(currentGroup)

	return (
		<div>
			{/* { store.todos.map((todo: {id: number, title: string, text: string}) => (
				<h2 key={todo.id}>{todo.text}</h2>
			))} */}
			<Breadcrumb />
			<Intro />
			<Filter />
			<Markets />
		</div>
	)
}

export default observer(InPlay)