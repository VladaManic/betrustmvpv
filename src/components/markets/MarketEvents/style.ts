import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const BetWrap = styled.div`
	.col-bet {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
    width: 103.1%;

		.col-item {
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
		}
	}

	&.col-2 {
		.col-item {
			flex-basis: 49%;
		}
	}

	&.col-3 {
		.col-item {
			flex-basis: 32%;
		}
	}
`;