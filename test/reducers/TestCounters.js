import test from '../test';
import counters from '../../src/reducers/counters';
import expect from 'expect';


test('TestCountersReducer', {
	'From no counter to one counter': () => {
		expect(
			counters([], { type: 'ADD_COUNTER' })
		).toEqual([0]);
	},

	'From one counter to two counter': () => {
		expect(
			counters([10], { type: 'ADD_COUNTER' })
		).toEqual([10,0]);
	},

	'From one counter to no counter': () => {
		expect(
			counters([10], { type: 'REMOVE_COUNTER', index: 0 })
		).toEqual([]);
	},

	'From three counter to two counter': () => {
		expect(
			counters([10, 11, 12], { type: 'REMOVE_COUNTER', index: 1 })
		).toEqual([10, 12]);
	},

	'Add with undefined returns a new counter in array': () => {
		expect(
			counters(undefined, { type: 'ADD_COUNTER' })
		).toEqual([0]);
	},

	'Remove with undefined returns an empty array': () => {
		expect(
			counters(undefined, { type: 'REMOVE_COUNTER', index: 0 })
		).toEqual([]);
	},

	'Add with invalid action returns same state': () => {
		expect(
			counters([1,2,3], { type: 'INVALID_ACTION' })
		).toEqual([1,2,3]);
	},

	'Remove with invalid action returns same state': () => {
		expect(
			counters([1,2,3], {})
		).toEqual([1,2,3]);
	}
});
