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
			<div className="right">
				<h4 className="name">
					<Link to="">{props.name}</Link>
				</h4>
				<p className="type">{props.type}</p>
				<p className="location">					{props.location}
				</p>
				<p className="follow">
					<Link to="">{props.follow}</Link>
				</p>
			</div>
		</div>
	);
}

export default CompanyItem;