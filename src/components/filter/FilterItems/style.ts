import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const FilterInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-top: 3px;
    margin-right: 13px;
    margin-left: 13px;
`;

export const FilterItem = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    border-left: 0.5px solid ${color.filterInactive};

    &:first-of-type {
        border-left: none;
    }

    button {
        font-size: 14px;
        line-height: 18px;
        color: ${color.filterInactive};

        &.active {
            color: ${color.mainWhite};
        }
    }
`;