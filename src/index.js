import store from './store/store';
import Counter from './components/Counter';
import React from 'react';
import { render } from 'react-dom';

const renderApp = () => {
	const counterProps = {
		value: store.getState(),
		incrementHandler: () => {
			store.dispatch({ type: 'INCREMENT' }); },
		decrementHandler: () => {
			store.dispatch({ type: 'DECREMENT' }); }
	};
	render(
		<Counter {...counterProps} />,
		document.getElementById('root')
	);
};

store.subscribe(renderApp);
renderApp();
