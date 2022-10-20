import React from 'react'

// Assets
import balanceIcon from '../../../assets/img/balance-icon.svg';

// Styles
import { BalanceWrap, BalanceIcon } from './style';

const Balance = () => {
	return (
		<BalanceWrap>
			<p>Balance: 150,00 BTR</p>
			<BalanceIcon src={ balanceIcon } alt="Balance icon" />
		</BalanceWrap>
	)
}

export default Balance