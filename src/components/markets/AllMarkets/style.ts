import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables';

export const AllWrapper = styled.div`
		flex: 1;
		margin-right: 36px;

		.single-market {
			&.opened {
				.col-bet {
					display: flex;
				}
			}

			&.closed {
				.col-bet {
					display: none;
				}
			}

			.title-wrap {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 28px;
				padding: 12px;
				margin-bottom: 10px;
				background-color: ${color.asideBg};
				border-radius: 10px;
				cursor: pointer;

				p {
					font-size: 14px;
					line-height: 18px;
					font-weight: 500;
					color: ${color.mainWhite};
				}
			}
		}
`;

export const ArrowUp = styled.img`
    width: 14px;
`;

export const BetWrap = styled.div`
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