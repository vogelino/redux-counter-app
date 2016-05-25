
const replaceInList = (list, index, newValue) => {
	return [
		...list.slice(0, index),
		newValue,
		...list.slice(index + 1)
	];
};

const incrementCounter = (list, index) =>
	typeof list[index] === 'undefined' ? list :
	replaceInList(list, index, list[index] + 1);

const decrementCounter = (list, index) =>
	typeof list[index] === 'undefined' ? list :
	replaceInList(list, index, list[index] - 1);

const addCounter = (list) => [ ...list, 0 ];

const removeCounter = (list, index) =>
	typeof list[index] === 'undefined' ? list :
	[ ...list.slice(0, index),
	  ...list.slice(index + 1) ];

export default (state = [], action) => {
	switch(action.type) {
		case 'INCREMENT': return incrementCounter(state, action.index);
		case 'DECREMENT': return decrementCounter(state, action.index);
		case 'ADD_COUNTER': return addCounter(state);
		case 'REMOVE_COUNTER': return removeCounter(state, action.index);
		default: return state;
	}
}
