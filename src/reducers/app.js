import counters from './counters'

const initialState = {
	counters: []
};

export default (state = initialState, action) => {
	switch(action.type) {
		case 'INCREMENT_COUNTER':
		case 'DECREMENT_COUNTER':
		case 'ADD_COUNTER':
		case 'REMOVE_COUNTER':
			return Object.assign({}, state,
				{ counters: counters(state.counters, action) });
		default: return state;
	}
}
