import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import Advertise from './Advertise';
import CompanyFeature from './CompanyFeature';

import AdvertiseImg from '../img/advertise.jpg';

const advertise = {
	background: `url(${AdvertiseImg}) no-repeat`
}

function LeftContent(props) {
	return (
		<div id="leftContent">
			<Menu />
			<Advertise style={advertise} />
			<CompanyFeature />
		</div>
	);
}

export default LeftContent;