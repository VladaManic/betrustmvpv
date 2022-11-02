import React from 'react'
import clsx from 'clsx';

import Event from '../Event'

// Styles
import { BetWrap } from './style';

// Types
import { MarketObj, EventObj } from '../../../types/interfaces';

interface Props {
	market: MarketObj;
}

const MarketEvents = ({market}: Props) => {
	return (
		<BetWrap className={clsx(market.col_count === 3 ? 'col-3' : 'col-2')}>
			<div className="col-bet">
				{ market.event.map((event: EventObj) => (
					<Event key={event.id} event={event} />
				))}
			</div>
		</BetWrap>
	)
}

export default MarketEvents