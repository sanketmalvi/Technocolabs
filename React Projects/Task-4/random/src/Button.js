import React from 'react';

class Button extends React.Component {
	render() {
		const { onClick, light } = this.props;
		return (
			<button 
				onClick={onClick}
				className={ light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}

export default Button;