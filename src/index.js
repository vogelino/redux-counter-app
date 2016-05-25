import store from './store/store';
import React from 'react';
import { render } from 'react-dom';

const renderApp = () => {
	render(<span>{store.getState()}</span>, document.getElementById('root'))
};

store.subscribe(renderApp);
renderApp();

document.addEventListener('click', () => {
	store.dispatch( { type: 'INCREMENT' } );
});
