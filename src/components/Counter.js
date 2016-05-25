import React from 'react';

export default ({ value, incrementHandler, decrementHandler }) => (
	<div className="counter">
		<span className="counter-value">
			{value}
		</span>
		<button
			onClick={incrementHandler}
			className="counter-increment">
			+
		</button>
		<button
			onClick={decrementHandler}
			className="counter-decrement">
			-
		</button>
	</div>
);
