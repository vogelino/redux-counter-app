import counters from './counters'
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	counters: []
};

export default (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.INCREMENT_COUNTER:
		case actionTypes.DECREMENT_COUNTER:
		case actionTypes.ADD_COUNTER:
		case actionTypes.REMOVE_COUNTER:
			return Object.assign({}, state,
				{ counters: counters(state.counters, action) });
		default: return state;
	}
}
