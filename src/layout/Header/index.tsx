import React from 'react'

// Styles
import { HeaderWrap } from './style';

import Balance from '../../components/header/Balance'
import ConnectionBtn from '../../components/header/ConnectionBtn'
import Notifications from '../../components/header/Notifications'

const header = () => {
	return (
		<HeaderWrap>
			<Balance />
			<ConnectionBtn />
			<Notifications />
		</HeaderWrap>
	)
}

export default header