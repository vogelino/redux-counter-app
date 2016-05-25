import counter from './counter'

const addCounter = (list) => [ ...list, 0 ];

const removeCounter = (list, index) =>
		[ ...list.slice(0, index),
		  ...list.slice(index + 1) ];

export default (state = [], action) => {
	switch(action.type) {
		case 'ADD_COUNTER':
			return addCounter(state);
		case 'REMOVE_COUNTER':
			return removeCounter(state, action.index);
		case 'INCREMENT_COUNTER':
		case 'DECREMENT_COUNTER':
			return [
				...state.slice(0, action.index),
				counter(state[action.index], action),
				...state.slice(action.index + 1)
			];
		default: return state;
	}
}
