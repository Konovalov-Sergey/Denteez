import React from 'react';

import PeopleMount from "./PeopleMount";
import ProductFeature from "./ProductFeature";
import Advertise from "./Advertise";

import AdvertiseImg from '../img/advertise_2.jpg';

const advertise2 = {
	background: `url(${AdvertiseImg}) no-repeat`
}

function RightContent(props) {
	return (
		<div id="rightContent">
			<PeopleMount />
			<ProductFeature />
			<Advertise style={advertise2}/>
		</div>
	);
}

export default RightContent;