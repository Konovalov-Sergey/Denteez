import React from 'react';

import { Link } from 'react-router-dom';

function People(props) {
	return (
		<div className="people-content">
			<h4>{props.fio}</h4>
			<div className="person">
				<Link to="/">
					<span 
						className="photo"
						style={props.style}>
					</span>	
				</Link>
				<ul className="right">
					<li className="prof">
						<Link to="">{props.prof}</Link>
					</li>
					<li className="location">
						<Link to="">{props.location}</Link>
					</li>
					<li className="add">
						<Link to="">{props.add}</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default People;