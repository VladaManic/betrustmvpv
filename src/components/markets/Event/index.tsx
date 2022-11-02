import React from 'react'

// Styles
import { ColItem } from './style'

// Types
import { EventObj  } from '../../../types/interfaces';

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