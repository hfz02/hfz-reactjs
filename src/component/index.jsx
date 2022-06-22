import React from 'react';
import ClassComponent from './ClassComp';
import FuncComponent from './FuncComp';

class Component extends React.Component {
	render() {
		return (
			<div>
				<ClassComponent />
				<FuncComponent />
			</div>
		)
	}
}

export default Component;