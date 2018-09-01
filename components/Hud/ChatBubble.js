import React from 'react';
import {connect} from "react-redux";
import './chat.scss'
import classnames from 'classnames'

const ChatBubble = (props) => {
	let bubbleClass = classnames({
		'hidden': props.hidden
	})
	return <div id="chat-bubble" className={bubbleClass}>{props.text}</div>
}

export default connect(state=>state)(ChatBubble)
