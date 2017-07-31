import React from 'react';

import Button from './Button';
import Service from './Service';

function MiddleContent(props) {
	return (
		<div id="middleContent">
			<h2>Service Directory</h2>
			<Button className="btn right" title="Add New Service" />
			<div className="container">
			{
				props.datas.map(data => 
				<Service 
					key={data.id}
					id={data.id}
					title={data.title}
					icon={data.icon}
				/>)
			}
			</div>
		</div>
	);
}

export default MiddleContent;