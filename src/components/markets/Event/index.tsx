import React from 'react'

// Styles
import { ColItemWrap } from './style'

// Types
import { EventObj  } from '../../../types/interfaces';

interface Props {
	event: EventObj
}

const Event = ({event}: Props) => {
	return (
		<ColItemWrap>
			<p className="data-name">{ event.name }</p>
			<p className="bet-price">{ event.price }</p>
		</ColItemWrap>
	)
}

export default Event