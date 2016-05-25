import store from './store/store';
import Counters from './components/Counters';
import React from 'react';
import { render } from 'react-dom';
import * as actionTypes from './actions/actionTypes';

const renderApp = () => {
	const state = store.getState();
	const counterProps = {
		...state,
		incrementHandler: function() {
			store.dispatch({
				type: actionTypes.INCREMENT_COUNTER,
				index: this.index });
		},
		decrementHandler: function() {
			store.dispatch({
				type: actionTypes.DECREMENT_COUNTER,
				index: this.index });
		},
		addCounterHandler: function() {
			store.dispatch({
				type: actionTypes.ADD_COUNTER });
		},
		removeCounterHandler: function() {
			store.dispatch({
				type: actionTypes.REMOVE_COUNTER,
				index: this.index });
		}
	};
	render(
		<Counters {...counterProps} />,
		document.getElementById('root')
	);
};

store.subscribe(renderApp);
renderApp();
