import React from 'react';
import './chat.scss'

export default class extends React.Component {
	render() {
		return (
			<div id="chat">
				<div className="chat-pane">
					<div className="tab">General</div>
					<div ref="messages" className="messages">
						<p className="error">Press "Y" to open Achievements Pane.</p>
						<p className="error">Press "/" or "Enter" to access chat pane.</p>
						<p className="error">Emotes Available: /laugh, /cry, /beg, /cheer</p>
						<p>[<span className="player">Maygus</span>] says: Heya</p>
					</div>
				</div>
				<div className="chat-input">
					<span>Say:</span>
					<input ref="chatbox" type="text"></input>
				</div>
			</div>
		)
	}
}