import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import arrowLeft from '../../../assets/img/arrow-left.svg';

// Styles
import { BreadcrumbWrap, ArrowLeft } from './style';

const Breadcrumb = () => {
	return (
		<Link to="/" className="breadcrumb-link">
			<BreadcrumbWrap>
				<ArrowLeft src={ arrowLeft } alt="Arrow left" />
				<p>In Play - Football</p>
			</BreadcrumbWrap>
		</Link>
	)
}

export default Breadcrumb