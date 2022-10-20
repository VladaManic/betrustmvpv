import React from 'react'

// Assets
import notificationBell from '../../../assets/img/bell.svg';
import notificationNumber from '../../../assets/img/notification.svg';

// Styles
import { NotificationWrap, NotificationBell, NotificationNumber } from './style';

const Notifications = () => {
	return (
		<NotificationWrap>
			<div className="notificationInner">
				<NotificationBell src={ notificationBell } alt="Notification bell" />
				<NotificationNumber src={ notificationNumber } alt="Notification number" />
			</div>
		</NotificationWrap>
	)
}

export default Notifications