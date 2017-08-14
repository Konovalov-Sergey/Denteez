import React from 'react';
import { Link } from 'react-router-dom';

function Advertise(props) {
	return (
		<div className="advertise">
			<h3>Advertisement</h3>
			<Link to="/">
				<div 
					style={props.style}
					className="advertise_board">
				</div>
			</Link>
			<p>
				<Link to="/">
					Ads By Denteez.com
				</Link>
			</p>
		</div>	
	);
}

export default Advertise;