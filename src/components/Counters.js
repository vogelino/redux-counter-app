import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as actionTypes from '../actions/actionTypes';

const Counters = ({
	counters,
	onAddClick,
	incrementHandler,
	decrementHandler,
	removeCounterHandler
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
			onClick={onAddClick}>
			Add a counter
		</button>
	</div>
);

const mapStateToProps = ({ counters }) => {
	return { counters };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: () => {
			dispatch({ type: actionTypes.ADD_COUNTER })
		},
		incrementHandler: (index) => {
			dispatch({ type: actionTypes.INCREMENT_COUNTER, index })
		},
		decrementHandler: (index) => {
			dispatch({ type: actionTypes.DECREMENT_COUNTER, index })
		},
		removeCounterHandler: (index) => {
			dispatch({ type: actionTypes.REMOVE_COUNTER, index });
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counters);
