import React from 'react';
import { Link } from 'react-router-dom';

import CompanyItem from './CompanyItem';

import Img1 from '../img/company-img_1.png';
import Img2 from '../img/company-img_2.png';
import Img3 from '../img/company-img_3.png';

const img1 = {
	background: `url(${Img1}) no-repeat`
}
const img2 = {
	background: `url(${Img2}) no-repeat`
}
const img3 = {
	background: `url(${Img3}) no-repeat`
}

function CompanyFeature(props) {
	return (
		<div>
			<div className="company-title">
				<h3>Featured Companies</h3>
				<Link to="/" className="right">See All</Link>
			</div>
			<div className="company">
				<CompanyItem 
					style={img1}
					name={"Company Name"}
					type={"Manufacturer"}
					location={"Belgrade, Serbia"}
					follow={"Follow Now"}
				/>
				<CompanyItem 
					style={img2}
					name={"Company Name"}
					type={"Service Provider"}
					location={"New York, USA"}
					follow={"Follow Now"}
				/>
				<CompanyItem 
					style={img3}
					name={"Company Name"}
					type={"Supplier"}
					location={"London, England"}
					follow={"Follow Now"}
				/>	
			</div>
			<div className="company-foot">
				<p>Denteez Copyright 2015</p>
				<p>
					<span><Link to="/">Terms of use</Link></span>
					<Link to="/">Privacy Policy</Link>
				</p>
			</div>
		</div>
	);
}

export default CompanyFeature;