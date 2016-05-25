const counter = require('../../src/reducers/counterReducer');
const expect = require('expect');

expect(
	counter(0, { type: 'INCREMENT' })
).toEqual(1);
console.log('Test increment from 0 to 1 passed');

expect(
	counter(1, { type: 'INCREMENT' })
).toEqual(2);
console.log('Test increment from 1 to 2 passed');

expect(
	counter(2, { type: 'DECREMENT' })
).toEqual(1);
console.log('Test decrement from 2 to 1 passed');

expect(
	counter(1, { type: 'DECREMENT' })
).toEqual(0);
console.log('Test decrement from 1 to 0 passed');

console.log('——————————————————— Test Counter Reducer ———————————————————');
console.log('————————————————————— All tests passed —————————————————————');

