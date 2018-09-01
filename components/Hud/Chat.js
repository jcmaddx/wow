import React from 'react';
import {connect} from "react-redux";
import './chat.scss'

class Chat extends React.Component {
	render() {
		return (
			<div id="chat">
				<div className="chat-pane">
					<div className="tab">General</div>
					<div ref="messages" className="messages">
						<p className="error">Press "Y" to open Achievements Pane.</p>
						<p className="error">Emotes Available: /laugh, /cry, /beg, /cheer</p>
						<p onClick={() => {this.props.dispatch({type: "ANIMATE", value: "cheer"})}}>[<span className="player">Maygus</span>] says: Heya</p>
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

export default connect(state=>state)(Chat)