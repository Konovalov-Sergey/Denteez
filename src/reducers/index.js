import {GET_DATA} from '../actions';

function reducer(state = [], action) {
	switch (action.type) {
		case GET_DATA:
			return action.datas;
		default:
			return state;
	}
}

export default reducer;