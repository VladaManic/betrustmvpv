import styled, {  } from 'styled-components';

export const NotificationWrap = styled.div`
    display: flex;
		align-items: center;
		margin-right: 20px;

		.notificationInner {
			position: relative;
		}
`;

export const NotificationBell = styled.img`
    width: 16.2px;
`;

export const NotificationNumber = styled.img`
		position: absolute;
		top: -7px;
		right: -7px;
		width: 14px;
`;