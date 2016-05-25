import test from '../test';
import counter from '../../src/reducers/counterReducer';
import expect from 'expect';


test('TestCounterReducer', {
	'Tests for the INCREMENT and DECREMENT actions': {
		'Test increment from 0 to 1 passed': () => {
			expect(
				counter([0], { type: 'INCREMENT', index: 0 })
			).toEqual([1]);
		},

		'Test increment from 1 to 2 passed': () => {
			expect(
				counter([0,1], { type: 'INCREMENT', index: 1 })
			).toEqual([0,2]);
		},

		'Test from undefined to empty array passed': () => {
			expect(
				counter(undefined, { type: 'INCREMENT', index: 0 })
			).toEqual([]);
		},

		'Test decrement from 2 to 1 passed': () => {
			expect(
				counter([2], { type: 'DECREMENT', index: 0 })
			).toEqual([1]);
		},

		'Test decrement from 1 to 0 passed': () => {
			expect(
				counter([1], { type: 'DECREMENT', index: 0 })
			).toEqual([0]);
		},

		'Test passing an unknown action retrieves the same state passed': () => {
			expect(
				counter([1], { type: 'UNKNOWN_ACTION' })
			).toEqual([1]);
		},

		'Test passing an invalid action retrieves the same state passed': () => {
			expect(
				counter([0], {})
			).toEqual([0]);
		}
	}
});
