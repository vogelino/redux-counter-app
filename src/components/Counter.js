import React from 'react';

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
		<button
			onClick={incrementHandler.bind({ index })}
			className="counter-increment">
			+
		</button>
		<button
			onClick={decrementHandler.bind({ index })}
			className="counter-decrement">
			-
		</button>
		<button
			onClick={removeCounterHandler.bind({ index })}
			className="counters-remove">
			Remove this counter
		</button>
	</div>
);
