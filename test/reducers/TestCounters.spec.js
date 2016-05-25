import counters from '../../src/reducers/counters';
import * as actionTypes from '../../src/actions/actionTypes';
import expect from 'expect';

describe('TestCountersReducer', () => {
	it('should be able to add a counter when none is there already', () => {
		expect(
			counters([], { type: actionTypes.ADD_COUNTER })
		).toEqual([0]);
	}),

	it('should be able to add a counter when one is there already', () => {
		expect(
			counters([10], { type: actionTypes.ADD_COUNTER })
		).toEqual([10,0]);
	}),

	it('should be able to remove a counter when one is there already', () => {
		expect(
			counters([10], { type: actionTypes.REMOVE_COUNTER, index: 0 })
		).toEqual([]);
	}),

	it('should be able to remove a specific counter form a list of multiple counters', () => {
		expect(
			counters([10, 11, 12], { type: actionTypes.REMOVE_COUNTER, index: 1 })
		).toEqual([10, 12]);
	}),

	it('should return the default state when add is called with undefined', () => {
		expect(
			counters(undefined, { type: actionTypes.ADD_COUNTER })
		).toEqual([0]);
	}),

	it('should return an empty array when remove is called with undefined', () => {
		expect(
			counters(undefined, { type: actionTypes.REMOVE_COUNTER, index: 0 })
		).toEqual([]);
	}),

	it('should return the same state when called with an unkown action', () => {
		expect(
			counters([1,2,3], { type: 'UNKNOWN_ACTION' })
		).toEqual([1,2,3]);
	}),

	it('should return the same state when called with an invalid action', () => {
		expect(
			counters([1,2,3], {})
		).toEqual([1,2,3]);
	})
});
