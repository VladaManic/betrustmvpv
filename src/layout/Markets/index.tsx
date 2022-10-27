import React from 'react'

import AllMarkets from '../../components/markets/AllMarkets'
import Aside from '../../components/markets/Aside'

// Styles
import { MarketsWrap } from './style';

const Markets = () => {
	return (
		<MarketsWrap>
			<AllMarkets />
			<Aside />
		</MarketsWrap>
	)
}

export default Markets