import React from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'

const InPlay = () => {
	return (
		<div>
			{ store.todos.map((todo: {title: string, text: string}) => (
				<h2>{todo.text}</h2>
			))}
		</div>
	)
}

export default observer(InPlay)