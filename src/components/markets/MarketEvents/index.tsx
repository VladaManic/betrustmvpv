import React from 'react'

// Styles
import { BetWrap } from './style';

interface EventObj {
	order: string,
	id: number,
	name: string,
	price: number
}

interface MarketObj {
	id: number,
	col_count: number,
	name: string,
	event: EventObj[]
}

interface Props {
	market: MarketObj;
}

const MarketEvents = ({market}: Props) => {
	return (
		<BetWrap>
			<div className={ market.col_count === 3 ? 'col-bet col-3' : 'col-bet col-2'}>
				{ market.event.map((event: EventObj) => (
					<div key={event.id} className="col-item">
						<p className="data-name">{ event.name }</p>
						<p className="bet-price">{ event.price }</p>
					</div>
				))}
			</div>
		</BetWrap>
	)
}

export default MarketEvents