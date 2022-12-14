import styled, {  } from 'styled-components';
import { color } from '../../../shared/styles/variables'

export const FilterItemWrap = styled.div`
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
        transition: opacity 0.25s;

        &.active {
            color: ${color.mainWhite};
            border-bottom: 2px solid ${color.secondaryBlue};
        }

        &:not(.active):hover {
            opacity: 0.7;
        }
    }
`;