import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import betrustLogo from '../assets/img/betrust-logo.svg';

// Styles
import { Sidebar, BetrustLogo } from './aside';

const Aside = () => {
	return (
		<Sidebar>
			<nav className="main-navigation">
				<BetrustLogo src={betrustLogo} alt="Logo" />
				<ul>
					<li><NavLink to='/'>In Play</NavLink></li>
					<li><NavLink to='/pre-match'>Pre-Match</NavLink></li>
					<li><NavLink to='/my-bets'>My Bets</NavLink></li>
					<li><NavLink to='/btr-excange'>BTR Excange</NavLink></li>
				</ul>
			</nav>
		</Sidebar>
	)
}

export default Aside