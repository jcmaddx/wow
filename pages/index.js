import {withRouter} from 'next/router'
import React, {Component} from "react";
import {connect} from "react-redux";
import fetch from 'isomorphic-unfetch'
import withRedux from "next-redux-wrapper";
import AchievementPane from '../components/AchievementPane'
import Content from '../components/Content'
import Character from '../components/Character'
import Hud from '../components/Hud'
import Loading from '../components/Loading'
import GetNew from '../components/Achievement/GetNew'

import "./global.scss"

let bubbleTime;
let animTimer;

class Index extends Component {
	static async getInitialProps () {
		const res = await fetch('https://us.api.battle.net/wow/character/Nesingwary/Maygus?fields=stats&locale=en_US&apikey=nhpy2sjgwgy2gk3q557ka9r6vvjkq288')
	  const data = await res.json()
	  return {
	    character: data
	  }
	}

	componentDidMount() {
		window.addEventListener("keyup", this.handleKeys);
		let complete = () => {
			document.getElementById('main-content').classList.remove('hidden')
			this.props.dispatch({type: 'INTRO', value: false});
			this.intro();
		};
		var queue = new createjs.LoadQueue();
		createjs.Sound.alternateExtensions = ["mp3"];
		queue.installPlugin(createjs.Sound);
		queue.on("progress", (e) => {
			let bar = document.getElementById('progress');
			let update = Math.round((e.progress * 100) + 7);
			bar.style.width = update + "%";
		});
		queue.on("complete", complete, this);
		queue.loadManifest("/static/manifest.json");
	}

	handleKeys = (e) => {
		let code = e.keyCode;
		let box = document.getElementById('chatbox');
		if(!this.props.locked){
			switch(true) {
				case (code === 89): // Y Key for achievement pane
					if(this.props.hide){
						this.props.dispatch({type: "ACHIEVEMENTS", value: false})
						this.playSound('openmenu')
					} else {
						this.props.dispatch({type: "ACHIEVEMENTS", value: true})
						this.playSound('closemenu')
					}
					break;
				case ((code > 47 && code < 58) || code === 187 || code === 189 || code === 74 || code === 86): // Number keys
					this.playRandom();
					break;
				case (code === 191 || code === 13): // Slash and enter for chat
					
					if(code === 191){
						box.value = '/'; //set slash for emotes in box
					}
					box.focus();
					break;
			}
		} else {
			if(code === 27) { //escape pressed while focused
				box.blur();
			} else if(code === 13) { // pressed enter in the box
				let text = box.value;
				if(text !== "") {
					this.handleChat(text);
					box.value = '';
				}
				box.blur();
			}
		}
	}

	handleEmote = (id, timer) => {
		switch(id){
			case 'cheer':
				this.props.dispatch({type: 'ANIMATE', value: id});
				let sound = 'cheer'+ (Math.floor(Math.random() * 2) + 1);
				this.playSound(sound);
				break;
			case 'laugh':
			case 'cry':
			case 'beg':
				this.props.dispatch({type: 'ANIMATE', value: id});
				this.playSound(id);
				break;
			default:
				return false
				break;
		}
		clearTimeout(animTimer);
		animTimer = setTimeout(() => {
			this.props.dispatch({type: 'ANIMATE', value: 'stand'});
		}, timer)
	}

	handleChat = (text) => {
		let message, messages = document.getElementById('messages'), container = document.getElementById('contain');
		if(text.charAt(0) === '/'){ // trying a command
			let timer, isValid = true, code = text.substring(1);
			if(text === '/cheer') {
				this.handleEmote(code, 2500);
				message = "You cheer!";
			} else if(text === '/laugh') {
				this.handleEmote(code, 3300);
				message = "You laugh.";
			} else if(text === '/cry') {
				this.handleEmote(code, 4250);
				message = "You cry.";
			} else if(text === '/beg') {
				this.handleEmote(code, 4700);
				message = "You beg everyone around you. How pathetic.";
			} else { // invalid command
				isValid = false;
				messages.insertAdjacentHTML('beforeend', '<p class="error">That is not a valid command.</p>');
				container.scrollTop = contain.scrollHeight; // keep scrolled to the bottom for new messages
			}
			if(isValid) { // go back to stand after animation
				messages.insertAdjacentHTML('beforeend', '<p class="emote">'+message+'</p>');
				container.scrollTop = contain.scrollHeight; // keep scrolled to the bottom for new messages
			}
		} else { // just some text
			let bubble = document.getElementById('chat-bubble');
			messages.insertAdjacentHTML('beforeend', '<p>[<span class="player">Maygus</span>] says: '+text+'</p>');
			container.scrollTop = contain.scrollHeight; // keep scrolled to the bottom for new messages
			this.props.dispatch({type: 'TALK', value: text});
			this.props.dispatch({type: 'ANIMATE', value: 'talk'});
			bubble.classList.remove('hidden')
			clearTimeout(bubbleTime);
			bubbleTime = setTimeout(() => {
				bubble.classList.add('hidden')
				this.props.dispatch({type: 'ANIMATE', value: 'stand'});
			}, 4000)
		}
	}

	playSound = (id) => {
		createjs.Sound.createInstance(id).play();
	}

	playRandom = () => {
		let options = ['notyet1', 'notyet2', 'notarget1', 'notarget2'];
		let rando = Math.floor(Math.random()*4);
		this.playSound(options[rando]);
	}

	intro = () => {
		this.playSound('achievement-get');
		this.props.dispatch({type: "GET", value: false})
		this.props.dispatch({type: "ANIMATE", value: "cheer"})
		setTimeout(() => {
			this.props.dispatch({type: "ANIMATE", value: "stand"})
			this.playSound('openmenu');
			this.props.dispatch({type: "ACHIEVEMENTS", value: false})
		},5000)
	}

	render() {
		let props = this.props
		return (
			<div id="app">
					{ (props.loading) ? <Loading /> : null }
					<div id="main-content" className="main-content hidden">
						<Character location="main" current={props.action} action="stand" />
						<Character location="main" current={props.action} action="cheer" />
						<Character location="main" current={props.action} action="talk" />
						<Character location="main" current={props.action} action="laugh" />
						<Character location="main" current={props.action} action="cry" />
						<Character location="main" current={props.action} action="beg" />
						<Hud handleEmote={this.handleEmote} playSound={this.playSound} playRandom={this.playRandom} character={props.character}/>
						<AchievementPane playSound={this.playSound} hidden={props.hide} points={props.character.achievementPoints.toLocaleString()}>
							<Content page={(props.router.query.page) ? props.router.query.page : 'summary'} />
						</AchievementPane>
						<GetNew hidden={props.get}/>
					</div> 
			</div>
		)
	}
}

export default withRouter(connect(state=>state)(Index))