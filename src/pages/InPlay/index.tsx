import React from 'react'
import { observer } from "mobx-react"

import Breadcrumb from '../../components/intro/Breadcrumb'
import Intro from '../../layout/Intro'
import Filter from '../../layout/Filter'

const InPlay = () => {

	return (
		<div>
			{/* { store.todos.map((todo: {id: number, title: string, text: string}) => (
				<h2 key={todo.id}>{todo.text}</h2>
			))} */}
			<Breadcrumb />
			<Intro />
			<Filter />
		</div>
	)
}

export default observer(InPlay)