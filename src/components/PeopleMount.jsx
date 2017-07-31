import React from 'react';
import { Link } from 'react-router-dom';

import People from './People';

import Img1 from '../img/people-img_1.png';
import Img2 from '../img/people-img_2.png';
import Img3 from '../img/people-img_3.png';

const img1 = {
	background: `url(${Img1}) no-repeat`
}
const img2 = {
	background: `url(${Img2}) no-repeat`
}
const img3 = {
	background: `url(${Img3}) no-repeat`
}

function PeopleMount(props) {
	return (
		<div className="people">
			<div className="people-know">
				<h3>People you may know</h3>
				<Link to="/" className="right">See All</Link>
			</div>
			<div>
				<People 
					fio="Dennis Adams"
					style={img1}
					prof="Dentist (Practice Owner)"
					location="London, England"
					add="add Friend"
				/>
				<People 
					fio="Mary Carpenter"
					style={img2}
					prof="Dentist (Practice Owner)"
					location="Belgrade, Serbia"
					add="add Friend"
				/>
				<People 
					fio="Danielle Salazar"
					style={img3}
					prof="Dentist (Practice Owner)"
					location="Paris, France"
					add="add Friend"
				/>
			</div>
		</div>
		
	);
}

export default PeopleMount;