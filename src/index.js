import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Counters from './components/Counters';
import React from 'react';
import { render } from 'react-dom';
import * as actionTypes from './actions/actionTypes';

render(
	<Provider store={createStore(reducers)}>
		<Counters/>
	</Provider>,
	document.getElementById('root')
);

