import React from 'react'

// Assets
import arrowLeft from '../../../assets/img/arrow-left.svg';

// Styles
import { BreadcrumbWrap, ArrowLeft } from './style';

const Breadcrumb = () => {
	return (
		<BreadcrumbWrap>
			<ArrowLeft src={ arrowLeft } alt="Arrow left" />
			<p>In Play - Football</p>
		</BreadcrumbWrap>
	)
}

export default Breadcrumb