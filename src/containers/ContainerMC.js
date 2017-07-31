import { connect } from 'react-redux';

import MiddleContent from '../components/MiddleContent';

function mapStateToProps(state) {
	return {
		datas: state
	};
}

const ContainerMC = connect(mapStateToProps)(MiddleContent);

export default ContainerMC;