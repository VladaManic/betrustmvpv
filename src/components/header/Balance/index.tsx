import React from 'react'

// Assets
import balanceIcon from '../../../assets/img/balance-icon.svg';

// Styles
import { BalanceIcon, BalanceParagraph } from './style';

const Balance = () => {
	return (
		<div>
			<BalanceParagraph>Balance: 150,00 BTR</BalanceParagraph>
			<BalanceIcon src={ balanceIcon } alt="Balance icon" />
		</div>
	)
}

export default Balance