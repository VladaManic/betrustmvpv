import React from 'react'
import { Link } from 'react-router-dom'

import UpdateBtn from '../UpdateBtn'

// Assets
import arrowLeft from '../../../assets/img/arrow-left.svg';

// Styles
import { BreadcrumbWrap, LinkWrap, ArrowLeft } from './style';

const Breadcrumb = () => {
	return (
		<Link to="/" className="breadcrumb-link">
			<BreadcrumbWrap>
				<LinkWrap>
					<ArrowLeft src={ arrowLeft } alt="Arrow left" />
					<p>In Play - Football</p>
				</LinkWrap>
				<UpdateBtn /> 
			</BreadcrumbWrap>
		</Link>
	)
}

export default Breadcrumb