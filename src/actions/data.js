export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA = 'GET_DATA';

export function requestData() {
	return {
		type: REQUEST_DATA
	};
}

export function getData() {
	return fetch('api/datas')
		.then(response => response.json())
		.then(datas => ({
			type: GET_DATA,
			datas
	}));
}