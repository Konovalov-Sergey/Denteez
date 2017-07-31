import React from 'react';
import { Link } from 'react-router-dom';

import Ava from '../img/ava.png';
import Logo from '../img/logo.png';
import Icon from '../img/icons.png';

const logo = {
	background: `url(${Logo}) no-repeat`
};
const search = {
	background: `url(${Icon}) no-repeat 10px 11px #73993d`,
};
const chat = {
	background: `url(${Icon}) no-repeat 0px -25px`,
};
const notification = {
	background: `url(${Icon}) no-repeat 0px -50px`,
};
const ava = {
	background: `url(${Ava}) no-repeat left`,
};
function Header(props) {
	return (
		<header id="header">
			<div className="inner">
				<Link to="/" 
					className="logo"
					style={logo}>
				</Link>
				<input 
					type="text" 
					className="search"
					style={search}
					placeholder="Company Name"
				/>
				<Link to="/" className="ava right">
					<span style={ava}></span>
					<i>Maximillian Beekeeper</i>
				</Link>
				<ul className="nav right">
					<li><Link to="/" style={chat}></Link></li>
					<li><Link to="/" style={notification}></Link></li>
				</ul>
				
			</div>
		</header>
	);
}

export default Header;