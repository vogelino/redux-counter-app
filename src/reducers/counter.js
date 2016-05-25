import * as actionTypes from '../actions/actionTypes';

const incrementCounter = (value) => value + 1;
const decrementCounter = (value) => value - 1;

export default (state = 0, action) => {
	switch(action.type) {
		case actionTypes.INCREMENT_COUNTER: return incrementCounter(state, action.index);
		case actionTypes.DECREMENT_COUNTER: return decrementCounter(state, action.index);
		default: return state;
	}
}
