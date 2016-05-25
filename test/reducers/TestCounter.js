import test from '../test';
import counter from '../../src/reducers/counter';
import expect from 'expect';
import {
	INCREMENT_COUNTER,
	DECREMENT_COUNTER
} from '../../src/actions/actionTypes';


test('TestCounterReducer', {
	'Increment from 0 to 1': () => {
		expect(
			counter(0, { type: INCREMENT_COUNTER })
		).toEqual(1);
	},

	'Increment from 1 to 2': () => {
		expect(
			counter(1, { type: INCREMENT_COUNTER })
		).toEqual(2);
	},

	'From undefined to initial state': () => {
		expect(
			counter(undefined, { type: INCREMENT_COUNTER})
		).toEqual(1);
	},

	'Decrement from 2 to 1': () => {
		expect(
			counter(2, { type: DECREMENT_COUNTER })
		).toEqual(1);
	},

	'Decrement from 1 to 0': () => {
		expect(
			counter(1, { type: DECREMENT_COUNTER })
		).toEqual([0]);
	},

	'Passing an unknown action retrieves the same state': () => {
		expect(
			counter(1, { type: 'UNKNOWN_ACTION' })
		).toEqual(1);
	},

	'Passing an invalid action retrieves the same state': () => {
		expect(
			counter(0, {})
		).toEqual(0);
	}
});
