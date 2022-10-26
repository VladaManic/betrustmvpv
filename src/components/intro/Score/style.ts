import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const ScoreWrap = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding-top: 19px;
    background-color: ${color.statisticsBg};
    border-radius: 8px;

    p {
        font-size: 16px;
        line-height: 25px;

        &.name-first {
            margin-right: 14px;
        }

        &.score-first {
            font-size: 26px;
            margin-right: 20px;
            margin-left: 35px;
        }

        &.middle-separator {
            font-size: 26px;
            line-height: 22px;
        }

        &.score-second {
            font-size: 26px;
            margin-right: 35px;
            margin-left: 20px;
        }

        &.name-second {
            margin-left: 14px;
        }
    }
`;

export const Dress = styled.img`
    width: 19px;
`;