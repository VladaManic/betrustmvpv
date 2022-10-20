import { createGlobalStyle } from 'styled-components';

import Axiforma from './Axiforma-Regular.woff';
import Axiforma2 from './Axiforma-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Axiforma';
        src: local('Axiforma'), local('Axiforma'),
        url(${Axiforma}) format('woff'),
        url(${Axiforma2}) format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;