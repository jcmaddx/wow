import React from 'react';
import './chat.scss'

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id="chat-bubble">{this.props.text}</div>
		)
	}
}