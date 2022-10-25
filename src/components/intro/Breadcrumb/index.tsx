import React from 'react'

// Assets
import arrowLeft from '../../../assets/img/arrow-left.svg';

// Styles
import { ArrowLeft } from './style';

const Breadcrumb = () => {
	return (
		<div>
			<ArrowLeft src={ arrowLeft } alt="Arrow left" />
			<p>Pre-Match - Football</p>
		</div>
	)
}

export default Breadcrumb