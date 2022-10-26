import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const StatisticsWrap = styled.div`
    width: 440px;
    margin-right: 12px;
    padding: 8px;
    background-color: ${color.statisticsBg};
    border-radius: 8px;

    table {
        width: 100%; 

        tr {
            display: flex;
            justify-content: flex-end;

            td {
                width: 30px;
                font-size: 12px;
                line-height: 17px;
                letter-spacing: 1%;
                text-align: center;

                &:first-of-type {
                    flex: 1;
                    text-align: left;
                }

                &.text-focus {
                    color: ${color.yellowText};
                }

                &.text-grey {
                    color: ${color.breadcrumbGrey};
                }
            }
        }
    } 
`;

export const YellowCard = styled.img`
    width: 10px;
`;

export const RedCard = styled.img`
    width: 10px;
`;

export const CornerIcon = styled.img`
    width: 12px;
`;