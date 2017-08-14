export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA = 'GET_DATA';

export function requestData() {
	return {
		type: REQUEST_DATA
	};
}

export function getData() {
	return fetch('http://504080.com/api/v1/services/categories', {
		method: 'GET',
		headers: {
			Authorization:'d9917a53ee3b7526e761615a4ed296bada91c4ca'
		}
	})
		.then(response => response.json())
		.then(datas => ({
			type: GET_DATA,
			datas: datas.data
	}));
}