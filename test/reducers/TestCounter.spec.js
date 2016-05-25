import counter from '../../src/reducers/counter';
import * as actionTypes from '../../src/actions/actionTypes';
import expect from 'expect';

describe('TestCounterReducer', () => {
	it('should increment from 0 to 1 when giving the increment action', () => {
		expect(
			counter(0, { type: actionTypes.INCREMENT_COUNTER })
		).toEqual(1);
	})

	it('should increment from 1 to 2 when giving the increment action', () => {
		expect(
			counter(1, { type: actionTypes.INCREMENT_COUNTER })
		).toEqual(2);
	})

	it('should return the initial state when passing undefined as initial state', () => {
		expect(
			counter(undefined, { type: actionTypes.INCREMENT_COUNTER})
		).toEqual(1);
	})

	it('should decrement from 2 to 1 when giving the decrement action', () => {
		expect(
			counter(2, { type: actionTypes.DECREMENT_COUNTER })
		).toEqual(1);
	})

	it('should decrement from 1 to 0 when giving the decrement action', () => {
		expect(
			counter(1, { type: actionTypes.DECREMENT_COUNTER })
		).toEqual(0);
	})

	it('should retrieve the same state when passing an unknown action', () => {
		expect(
			counter(1, { type: 'UNKNOWN_ACTION' })
		).toEqual(1);
	})

	it('should retrieve the same state when passing an invalid action', () => {
		expect(
			counter(0, {})
		).toEqual(0);
	})
});
