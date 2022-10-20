import styled, {  } from 'styled-components';
import { color } from '../../shared/styles/variables';

export const Sidebar = styled.nav`
    width: 256px;
    height: 100vh;
    padding-top: 20px;
    background-color: ${color.asideBg};

    ul {
        padding-top: 28px;
        padding-left: 16px;
        list-style-type: none;

        li {
            margin-bottom: 28px;

            a {
                position: relative;
                color: ${color.asideText};
                text-decoration: none;

                &.active:before {
                    content: '';
                    position: absolute;
                    top: -8px;
                    left: -16px;
                    width: 4px;
                    height: 36px;
                    background-color: ${color.secondaryBlue};
                }
            }
        }
    }
`;

export const BetrustLogo = styled.img`
    width: 129px;
    margin-left: 16px;
`;