import React from 'react';
import {connect} from "react-redux";
import './chat.scss'

class Chat extends React.Component {
	toggleLocked = (status) => {
		this.props.dispatch({type: "LOCK", value: status})
	}

	render() {
		return (
			<div id="chat">
				<div className="chat-pane" onClick={() => {document.getElementById('chatbox').focus()}}>
					<div className="tab">General</div>
					<div id="contain" className="message-contain">
						<div ref="messages" id="messages" className="messages">
							<p className="error">Press "Y" to open Achievements Pane.</p>
							<p className="error">Emotes Available: /laugh, /cry, /beg, /cheer</p>
							<p className="error">Download My Addon: /addon</p>
						</div>
					</div>
				</div>
				<div className="chat-input">
					<span>Say:</span>
					<input id="chatbox" onFocus={() => {this.toggleLocked(true)}} onBlur={() => {this.toggleLocked(false)}} ref="chatbox" type="text"></input>
				</div>
				<a id="addon" style={{display: "none"}} href="/static/files/AltVault.zip" download="AltVault.zip">AltVault</a>
			</div>
		)
	}
}

export default connect(state=>state)(Chat)