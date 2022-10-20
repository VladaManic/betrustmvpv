import React from 'react'

// Assets
import walletIcon from '../../../assets/img/wallet-icon.svg';

// Styles
import { WalletIcon } from './style';

const ConnectionBtn = () => {
	return (
		<div>
			<WalletIcon src={ walletIcon } alt="Wallet icon" />
			<p>0x7b...67b85f</p>
		</div>
	)
}

export default ConnectionBtn