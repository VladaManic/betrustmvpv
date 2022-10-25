import React, { useEffect, useState } from 'react'
import { observer } from "mobx-react"
import store from '../../store/store'

const InPlay = () => {

	const clickHandler = () => {
		console.log(store.sportData[0].name);
	}

	return (
		<div>
			{/* { store.todos.map((todo: {id: number, title: string, text: string}) => (
				<h2 key={todo.id}>{todo.text}</h2>
			))} */}
			<button onClick = {clickHandler}>Click</button>
		</div>
	)
}

export default observer(InPlay)