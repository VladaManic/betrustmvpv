import React from 'react'

import Balance from '../components/header/Balance'
import ConnectionBtn from '../components/header/ConnectionBtn'
import Notifications from '../components/header/Notifications'

const header = () => {
	return (
		<div className="header">
			<Balance />
			<ConnectionBtn />
			<Notifications />
		</div>
	)
}

export default header