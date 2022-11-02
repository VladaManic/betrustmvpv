import React from 'react'
import clsx from 'clsx';

// Assets
import arrowUp from '../../../assets/img/arrow-up.svg';

// Styles
import { TitleWrap, ArrowUp } from './style';

interface MarketObj {
	id: number,
	col_count: number,
	name: string,
	event: any[]
}

interface Props {
	market: MarketObj;
	onClick: any;
	active: boolean;
}

const MarketTitle = ({market, onClick, active}: Props) => {
	return (
		<TitleWrap className={clsx(active && 'active')} onClick={onClick}>
			<p>{ market.name }</p>
			<ArrowUp src={ arrowUp } alt="Arrow up" />
		</TitleWrap>
	)
}

export default MarketTitle