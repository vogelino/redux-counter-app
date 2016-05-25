import { createStore } from 'redux';
import counter from '../reducers/counterReducer';

const store = createStore(counter);

export default store;
