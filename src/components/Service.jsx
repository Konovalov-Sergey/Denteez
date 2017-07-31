import React from 'react';

function Service(props) {
	return (
		<div className="service">	
			<img src={props.icon} />
			<p>{props.title}</p>
		</div>
	)
}

export default Service;