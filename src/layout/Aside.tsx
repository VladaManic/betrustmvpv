import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import betrustLogo from '../assets/img/betrust-logo.svg';

// Styles
import { BetrustLogo } from './aside';

const Aside = () => {
	return (
		<nav className="main-navigation">
			<BetrustLogo src={betrustLogo} alt="Logo" />
			<ul>
				<li><Link to='/'>In Play</Link></li>
				<li><Link to='/pre-match'>Pre-Match</Link></li>
				<li><Link to='/my-bets'>My Bets</Link></li>
				<li><Link to='/btr-excange'>BTR Excange</Link></li>
			</ul>
		</nav>
	)
}

export default Aside