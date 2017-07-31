import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../img/icons.png';

const feed = {
	background: `url(${Icon}) no-repeat 0px -75px`,
};
const ask = {
	background: `url(${Icon}) no-repeat 0px -100px`,
};
const company = {
	background: `url(${Icon}) no-repeat 0px -125px`,
};
const service = {
	background: `url(${Icon}) no-repeat 0px -150px`,
};

function Menu(props) {
	return (
		<div>
			<ul className="menu">
				<li><Link to="/" style={feed}> Feed</Link></li>
				<li><Link to="/" style={ask}> Ask a Colleague</Link></li>
				<li><Link to="/" style={company}> Companies</Link></li>
				<li><Link to="/" style={service}> Service Directory </Link></li>
			</ul>
		</div>
	);
}

export default Menu;