import store from './store/store';
import Counters from './components/Counters';
import React from 'react';
import { render } from 'react-dom';

const renderApp = () => {
	const state = store.getState();
	const counterProps = {
		...state,
		incrementHandler: function() {
			store.dispatch({ type: 'INCREMENT_COUNTER', index: this.index });
		},
		decrementHandler: function() {
			store.dispatch({ type: 'DECREMENT_COUNTER', index: this.index });
		},
		addCounterHandler: function() {
			store.dispatch({ type: 'ADD_COUNTER' });
		},
		removeCounterHandler: function() {
			store.dispatch({ type: 'REMOVE_COUNTER', index: this.index });
		}
	};
	render(
		<Counters {...counterProps} />,
		document.getElementById('root')
	);
};

store.subscribe(renderApp);
renderApp();
