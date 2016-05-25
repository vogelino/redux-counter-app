import React from 'react';
import Counter from './Counter';

export default ({
	counters,
	incrementHandler,
	decrementHandler,
	removeCounterHandler,
	addCounterHandler
}) => (
	<div className="counters">
		{counters.map((value, index) => (
			<Counter {...{
				key: index,
				index,
				value,
				incrementHandler,
				decrementHandler,
				removeCounterHandler
			}} />
		))}
		<button
			className="counters-add"
			onClick={addCounterHandler}>
			Add a counter
		</button>
	</div>
);
