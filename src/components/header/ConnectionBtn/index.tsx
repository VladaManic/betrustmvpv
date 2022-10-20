import React from 'react'

// Assets
import walletIcon from '../../../assets/img/wallet-icon.svg';

// Styles
import { ConnectionWrap, WalletIcon } from './style';

const ConnectionBtn = () => {
	return (
		<ConnectionWrap>
			<WalletIcon src={ walletIcon } alt="Wallet icon" />
			<p>0x7b...67b85f</p>
		</ConnectionWrap>
	)
}

export default ConnectionBtn