import React from 'react'

// Assets
import balanceIcon from '../../../assets/img/balance-icon.svg';

// Styles
import { BalanceIcon } from './style';

const Balance = () => {
	return (
		<div>
			<p>BalanceL 150,00 BTR</p>
			<BalanceIcon src={ balanceIcon } alt="Balance icon" />
		</div>
	)
}

export default Balance