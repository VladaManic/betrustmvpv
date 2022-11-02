import React from 'react'
import useAccordion from '../../../hooks/useAccordion';

import MarketTitle from '../MarketTitle'
import MarketEvents from '../MarketEvents'

// Styles
import { SingleWrap } from './style';

// Types
import { MarketObj } from '../../../types/interfaces';

interface Props {
	singleMarket: MarketObj;
	index: number
}

const MarketWrap = ({singleMarket, index}: Props) => {
	const {opened, setOpened} = useAccordion(false, index);

	return (
		<SingleWrap>
			<MarketTitle market={singleMarket} onClick={() => setOpened((curr: boolean) => !curr)} active={opened} />
			{opened && <MarketEvents market={singleMarket} />}
		</SingleWrap>
	)
}

export default MarketWrap