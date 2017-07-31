import React from 'react';

import { Link } from 'react-router-dom';

function CompanyItem(props) {
	return (
		<div className="company-content">
			<Link to="/">
				<span 
					className="img"
					style={props.style}>
				</span>
			</Link>
			<ul className="right">
				<li className="name">
					<Link to="">{props.name}</Link>
				</li>
				<li className="type">
					<Link to="">{props.type}</Link>
				</li>
				<li className="location">
					<Link to="">{props.location}</Link>
				</li>
				<li className="follow">
					<Link to="">{props.follow}</Link>
				</li>
			</ul>
		</div>
	);
}

export default CompanyItem;