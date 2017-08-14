import React from 'react';
import { Link } from 'react-router-dom';

function Service(props) {
	return (
		<div className="service">
			<Link to="/">
				<img src={props.icon} />
				<p>{props.title}</p>
			</Link>	
		</div>
	)
}

export default Service;