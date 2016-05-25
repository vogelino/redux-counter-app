import counter from './counter'
import * as actionTypes from '../actions/actionTypes';

const addCounter = (list) => [ ...list, 0 ];

const removeCounter = (list, index) =>
		[ ...list.slice(0, index),
		  ...list.slice(index + 1) ];

export default (state = [], action) => {
	switch(action.type) {
		case actionTypes.ADD_COUNTER:
			return addCounter(state);
		case actionTypes.REMOVE_COUNTER:
			return removeCounter(state, action.index);
		case actionTypes.INCREMENT_COUNTER:
		case actionTypes.DECREMENT_COUNTER:
			return [
				...state.slice(0, action.index),
				counter(state[action.index], action),
				...state.slice(action.index + 1)
			];
		default: return state;
	}
}
