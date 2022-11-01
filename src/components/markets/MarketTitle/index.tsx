import React from 'react'

// Assets
import arrowUp from '../../../assets/img/arrow-up.svg';

// Styles
import { ArrowUp } from './style';

interface MarketObj {
	id: number,
	col_count: number,
	name: string,
	event: any[]
}

interface Props {
	singleMarket: MarketObj;
	onClick: any;
	// active: boolean;
}

const MarketTitle = ({singleMarket}: Props) => {
	return (
		<div className="title-wrap">
			<p>{ singleMarket.name }</p>
			<ArrowUp src={ arrowUp } alt="Arrow up" />
		</div>
	)
}

export default MarketTitle