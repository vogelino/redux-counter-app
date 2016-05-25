import test from '../test';
import counter from '../../src/reducers/counterReducer';
import expect from 'expect';


test('TestCounterReducer', {
	'INCREMENT and DECREMENT actions': {
		'Increment from 0 to 1 passed': () => {
			expect(
				counter([0], { type: 'INCREMENT', index: 0 })
			).toEqual([1]);
		},

		'Increment from 1 to 2 passed': () => {
			expect(
				counter([0,1], { type: 'INCREMENT', index: 1 })
			).toEqual([0,2]);
		},

		'From undefined to empty array passed': () => {
			expect(
				counter(undefined, { type: 'INCREMENT', index: 0 })
			).toEqual([]);
		},

		'Decrement from 2 to 1 passed': () => {
			expect(
				counter([2], { type: 'DECREMENT', index: 0 })
			).toEqual([1]);
		},

		'Decrement from 1 to 0 passed': () => {
			expect(
				counter([1], { type: 'DECREMENT', index: 0 })
			).toEqual([0]);
		},

		'Passing an unknown action retrieves the same state passed': () => {
			expect(
				counter([1], { type: 'UNKNOWN_ACTION' })
			).toEqual([1]);
		},

		'Passing an invalid action retrieves the same state passed': () => {
			expect(
				counter([0], {})
			).toEqual([0]);
		}
	},

	'ADD_COUNTER and REMOVE_COUNTER actions': {
		'From no counter to one counter': () => {
			expect(
				counter([], { type: 'ADD_COUNTER' })
			).toEqual([0]);
		},

		'From one counter to two counter': () => {
			expect(
				counter([10], { type: 'ADD_COUNTER' })
			).toEqual([10,0]);
		},

		'From one counter to no counter': () => {
			expect(
				counter([10], { type: 'REMOVE_COUNTER', index: 0 })
			).toEqual([]);
		},

		'From three counter to two counter': () => {
			expect(
				counter([10, 11, 12], { type: 'REMOVE_COUNTER', index: 1 })
			).toEqual([10, 12]);
		},

		'Add with undefined returns a new counter in array': () => {
			expect(
				counter(undefined, { type: 'ADD_COUNTER' })
			).toEqual([0]);
		},

		'Remove with undefined returns an empty array': () => {
			expect(
				counter(undefined, { type: 'REMOVE_COUNTER', index: 0 })
			).toEqual([]);
		},

		'Add with invalid action returns same state': () => {
			expect(
				counter([1,2,3], { type: 'REMOVE_COUNTER' })
			).toEqual([1,2,3]);
		},

		'Remove with invalid action returns same state': () => {
			expect(
				counter([1,2,3], {})
			).toEqual([1,2,3]);
		}
	}
});
