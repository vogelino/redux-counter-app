import counter from '../../src/reducers/counterReducer';
import expect from 'expect';


console.log('——————————————————— Test Counter Reducer ———————————————————');

expect(
	counter(0, { type: 'INCREMENT' })
).toEqual(1);
console.log('Test increment from 0 to 1 passed');

expect(
	counter(1, { type: 'INCREMENT' })
).toEqual(2);
console.log('Test increment from 1 to 2 passed');

expect(
	counter(undefined, { type: 'INCREMENT' })
).toEqual(1);
console.log('Test from undefined to 1 passed');

expect(
	counter(2, { type: 'DECREMENT' })
).toEqual(1);
console.log('Test decrement from 2 to 1 passed');

expect(
	counter(1, { type: 'DECREMENT' })
).toEqual(0);
console.log('Test decrement from 1 to 0 passed');

expect(
	counter(1, { type: 'UNKNOWN_ACTION' })
).toEqual(1);
console.log('Test passing an unknown action retrieves the same state passed');

expect(
	counter(0, {})
).toEqual(0);
console.log('Test passing an invalid action retrieves the same state passed');

console.log('————————————————————— All tests passed —————————————————————\n\n');

