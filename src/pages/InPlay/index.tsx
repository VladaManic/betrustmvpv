import React from 'react'
import { observer } from "mobx-react"

import Intro from '../../layout/Intro'

const InPlay = () => {

	return (
		<div>
			{/* { store.todos.map((todo: {id: number, title: string, text: string}) => (
				<h2 key={todo.id}>{todo.text}</h2>
			))} */}
			<Intro />
		</div>
	)
}

export default observer(InPlay)