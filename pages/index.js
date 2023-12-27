import {withRouter} from 'next/router'
import React, {useContext, useEffect, useRef} from "react";
import { useRouter } from 'next/router'
import AchievementPane from '../components/AchievementPane'
import Content from '../components/Content'
import Character from '../components/Character'
import Hud from '../components/Hud'
import Loading from '../components/Loading'
import GetNew from '../components/Achievement/GetNew'
import Landscape from '../components/Landscape'
import { Context } from '../utils/appContext';

import chatStyles from '../components/Hud/'

let bubbleTime;
let animTimer;

const Index = () => {
	const { state, dispatch } = useContext(Context);
	const hideRef = useRef(state.hide)
	const lockRef = useRef(state.locked)
	const chatStyleRef = useRef()
	const chatboxRef = useRef()
	const router = useRouter();
	const character =  {
		achievementPoints: 14055,
		name: "Maygus",
		level: 120,
		stats: {
			health: 196000,
			power: 100000
		}
	}

	useEffect(() => {
		hideRef.current = state.hide
		lockRef.current = state.locked
	}, [state])

	useEffect(() => {
		window.addEventListener("keyup", handleKeys);
		let complete = () => {
			document.getElementById('main-content').classList.remove('hidden')
			dispatch({type: 'INTRO', value: false})
			intro();
		};
		var queue = new createjs.LoadQueue();
		createjs.Sound.alternateExtensions = ["mp3"];
		queue.installPlugin(createjs.Sound);
		queue.on("progress", (e) => {
			let bar = document.getElementById('progress');
			let update = Math.round((e.progress * 100));
			if(bar){
				bar.style.width = update + "%";
			}
		});
		queue.on("complete", complete, this);
		queue.loadManifest("/static/manifest.json");
	}, [])

	const handleKeys = (e) => {
		let code = e.keyCode;
		let chatBox = chatboxRef.current;
		if(!lockRef.current){
			switch(true) {
				case (code === 89): // Y Key for achievement pane
					if(hideRef.current){
						dispatch({type: 'ACHIEVEMENTS', value: false})
						playSound('openmenu')
					} else {
						dispatch({type: 'ACHIEVEMENTS', value: true})
						playSound('closemenu')
					}
					break;
				case ((code > 47 && code < 58) || code === 187 || code === 189 || code === 74 || code === 86): // Number keys
					playRandom();
					break;
				case (code === 191 || code === 13): // Slash and enter for chat
					if(code === 191){
						chatBox.value = '/'; //set slash for emotes in box
					}
					chatBox.focus();
					break;
			}
		} else {
			if(code === 27) { //escape pressed while focused
				chatBox.blur();
			} else if(code === 13) { // pressed enter in the box
				let text = chatBox.value;
				if(text !== "") {
					handleChat(text);
					chatBox.value = '';
				}
				chatBox.blur();
			}
		}
	}

	const handleEmote = (id, timer) => {
		switch(id){
			case 'cheer':
				dispatch({type: 'ANIMATE', value: id})
				let sound = 'cheer'+ (Math.floor(Math.random() * 2) + 1);
				playSound(sound);
				break;
			case 'laugh':
			case 'cry':
			case 'beg':
				dispatch({type: 'ANIMATE', value: id})
				playSound(id);
				break;
			default:
				return false
				break;
		}
		clearTimeout(animTimer);
		animTimer = setTimeout(() => {
			dispatch({type: 'ANIMATE', value: 'stand'})
		}, timer)
	}

	const handleChat = (text) => {
		let message, messages = document.getElementById('messages'), container = document.getElementById('contain');
		if(text.charAt(0) === '/'){ // trying a command
			let timer, isValid = true, code = text.substring(1);
			if(text === '/cheer') {
				handleEmote(code, 2500);
				message = "You cheer!";
			} else if(text === '/laugh') {
				handleEmote(code, 3300);
				message = "You laugh.";
			} else if(text === '/cry') {
				handleEmote(code, 4250);
				message = "You cry.";
			} else if(text === '/beg') {
				handleEmote(code, 4700);
				message = "You beg everyone around you. How pathetic.";
			} else if(text == '/addon'){
				window.open('https://www.curseforge.com/wow/addons/altvault', '_blank').focus()
				message = "Thank you for checking out AltVault!"
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
			dispatch({type: 'TALK', value: text})
			dispatch({type: 'ANIMATE', value: 'talk'})
			bubble.classList.remove(chatStyleRef.current)
			clearTimeout(bubbleTime);
			bubbleTime = setTimeout(() => {
				bubble.classList.add(chatStyleRef.current)
				dispatch({type: 'ANIMATE', value: 'stand'})
			}, 4000)
		}
	}

	const playSound = (id) => {
		createjs.Sound.createInstance(id).play();
	}

	const playRandom = () => {
		let options = ['notyet1', 'notyet2', 'notarget1', 'notarget2'];
		let rando = Math.floor(Math.random()*4);
		playSound(options[rando]);
	}

	const intro = () => {
		playSound('achievement-get');
		dispatch({type: 'GET', value: false})
		dispatch({type: 'ANIMATE', value: 'cheer'})
		setTimeout(() => {
			dispatch({type: 'ANIMATE', value: 'stand'})
			playSound('openmenu');
			dispatch({type: 'ACHIEVEMENTS', value: false})
		},5000)
	}

	return (
		<div id="app">
			{ (state.loading) ? <Loading /> : null }
			<div id="main-content" className="main-content hidden">
				<Character location="main" current={state.action} action="stand" />
				<Character location="main" current={state.action} action="cheer" />
				<Character location="main" current={state.action} action="talk" />
				<Character location="main" current={state.action} action="laugh" />
				<Character location="main" current={state.action} action="cry" />
				<Character location="main" current={state.action} action="beg" />
				<Hud handleEmote={handleEmote} playSound={playSound} playRandom={playRandom} character={character} chatboxRef={chatboxRef} chatStyleRef={chatStyleRef}/>
				<AchievementPane playSound={playSound} points={character.achievementPoints.toLocaleString()}>
					<Content page={(router.query.page) ? router.query.page : 'summary'} />
				</AchievementPane>
				<GetNew hidden={state.get}/>
			</div> 
			<Landscape />
		</div>
	)
}

export default withRouter(Index)