import React from 'react'

// Styles
import { ColItem } from './style'

interface EventObj {
	order: string,
	id: number,
	name: string,
	price: number
}

interface Props {
	event: EventObj
}

const Event = ({event}: Props) => {
	return (
		<ColItem>
			<p className="data-name">{ event.name }</p>
			<p className="bet-price">{ event.price }</p>
		</ColItem>
	)
}

export default Event