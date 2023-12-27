import React, {useContext} from 'react';
import styles from './chat.module.scss'
import {Context} from '../../utils/appContext'

const ChatBubble = (props) => {
	const { state } = useContext(Context);
	return <div id="chat-bubble" className={`${styles.chatbubble} ${props.hidden ? styles.hidden : ''}`}>{state.text}</div>
}

export default ChatBubble
