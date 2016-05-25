import React from 'react';
import Button from './Button';

export default ({
	value,
	incrementHandler,
	decrementHandler,
	removeCounterHandler,
	index
}) => (
	<div className={`counter counter-${index}`}>
		<span className="counter-value">
			{value}
		</span>
		<Button
			onClick={() => { incrementHandler(index); }}
			componentClass="counter-increment">
			+
		</Button>
		<Button
			onClick={() => { decrementHandler(index); }}
			componentClass="counter-decrement">
			-
		</Button>
		<Button
			onClick={() => { removeCounterHandler(index); }}
			componentClass="counters-remove">
			Remove this counter
		</Button>
	</div>
);
