import counters from './counters'
import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
	return {
		counters: counters(state.counters, action)
	};
}
