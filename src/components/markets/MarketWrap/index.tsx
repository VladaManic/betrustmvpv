import React from 'react'
import useAccordion from '../../../hooks/useAccordion';

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
}

const MarketWrap = ({singleMarket, index}: Props) => {
	const {opened, setOpened} = useAccordion(false, index);

	return (
		<SingleWrap>
			<MarketTitle market={singleMarket} onClick={() => setOpened((curr: boolean) => !curr)} />
			{opened && <MarketEvents market={singleMarket} />}
		</SingleWrap>
	)
}

export default MarketWrap