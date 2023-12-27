import React, {useContext, useRef} from 'react';
import { Context } from '../../pages/appContext'
import styles from './chat.module.scss'

const Chat = (props) => {
	const messageRef = useRef()
	const { state, dispatch } = useContext(Context);
	props.chatStyleRef.current = styles.hidden

	const toggleLocked = (status) => {
		dispatch({type: "LOCK", value: status})
	}

	const textChanged = (e) => {
		props.chatboxRef.current = e.target
	}

	return (
		<div id="chat" className={styles.chat}>
			<div className={styles.chatpane} onClick={() => {document.getElementById('chatbox').focus()}}>
				<div className={styles.tab}>General</div>
				<div id="contain" className={styles.messagecontain}>
					<div ref={messageRef} id="messages" className={styles.messages}>
						<p className={styles.error}>Press "Y" to open Achievements Pane.</p>
						<p className={styles.error}>Emotes Available: /laugh, /cry, /beg, /cheer</p>
						<p className={styles.error}>Download My Addon: /addon</p>
					</div>
				</div>
			</div>
			<div className={styles.chatinput}>
				<span>Say:</span>
				<input id="chatbox" onChange={textChanged} onFocus={() => {toggleLocked(true)}} onBlur={() => {toggleLocked(false)}} ref={props.chatboxRef} type="text"></input>
			</div>
			<a id="addon" style={{display: "none"}} href="/static/files/AltVault.zip" download="AltVault.zip">AltVault</a>
		</div>
	)
}

export default Chat