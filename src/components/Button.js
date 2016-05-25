import React from 'react';

export default ({ children, componentClass, onClick }) => (
	<button
		onClick={onClick}
		className={componentClass}>
		{children}
	</button>
);
