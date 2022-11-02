import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const ColItem = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 16px;
	margin-bottom: 10px;
	border: 1px solid ${color.asideBorder};
	border-radius: 10px;
	transition: opacity 0.25s;
	cursor: pointer;

	.data-name {
		font-size: 12px;
		line-height: 17px;
		color: ${color.breadcrumbGrey};
	}

	.bet-price {
		font-size: 12px;
		line-height: 18px;
		color: ${color.betBlue};
	}

	&:hover {
		opacity: 0.7;
	}
`;