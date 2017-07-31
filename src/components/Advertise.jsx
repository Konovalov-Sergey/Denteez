import React from 'react';
import { Link } from 'react-router-dom';

function Advertise(props) {
	return (
		<div className="advertise">
			<Link to="/">
				<h3>Advertisement</h3>
				<div 
					style={props.style}
					className="advertise_board">
				</div>
				<p>Ads By Denteez.com</p>
			</Link>
		</div>	
	);
}

export default Advertise;