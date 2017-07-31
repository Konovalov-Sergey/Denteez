import React from 'react';

import ContainerMC from '../containers/ContainerMC';

import LeftContent from './LeftContent';
import RightContent from './RightContent';

function Main(props) {
	return (
		<div id="main">
			<div className="inner">
				<LeftContent />
				<ContainerMC />
				<RightContent />
			</div>
		</div>
	);
}

export default Main;