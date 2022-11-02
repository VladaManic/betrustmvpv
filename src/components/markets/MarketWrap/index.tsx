import React from 'react'

import MarketTitle from '../MarketTitle'
import MarketEvents from '../MarketEvents'

// Styles
import { SingleWrap } from './style';

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
	singleMarket: MarketObj;
	index: number
	//onClick: any;
	// active: boolean;
}

const clickHandler = (e: any) => {
	//React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
	const currentClasses = e.currentTarget.parentNode.className;
	const currentArray = currentClasses.split(' ')
	const imprtantClass = currentArray[1];
	if(imprtantClass === 'opened'){
		e.currentTarget.parentNode.className = 'single-market closed';
	} else {
		e.currentTarget.parentNode.className = 'single-market opened';
	}
}

const MarketWrap = ({singleMarket, index}: Props) => {
	return (
		<SingleWrap>
			<MarketTitle market={singleMarket} onClick={clickHandler} />
			<MarketEvents market={singleMarket} />
		</SingleWrap>
	)
}

export default MarketWrap