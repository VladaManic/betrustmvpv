import React from 'react'

// Assets
import notificationBell from '../../../assets/img/bell.svg';
import notificationNumber from '../../../assets/img/notification.svg';

// Styles
import { NotificationBell, NotificationNumber } from './style';

const Notifications = () => {
	return (
		<div>
			<NotificationBell src={ notificationBell } alt="Notification bell" />
			<NotificationNumber src={ notificationNumber } alt="Notification number" />
		</div>
	)
}

export default Notifications