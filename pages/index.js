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
			this.props.dispatch({type: 'INTRO', value: false});
			this.intro();
		};
		var queue = new createjs.LoadQueue();
		createjs.Sound.alternateExtensions = ["mp3"];
		queue.installPlugin(createjs.Sound);
		queue.on("progress", (e) => {
			let bar = document.getElementById('progress');
			let update = Math.round((e.progress * 100));
			bar.style.width = update + "%";
		});
		queue.on("complete", complete, this);
		queue.loadManifest("/static/manifest.json");
	}

	handleKeys = (e) => {
		if(!this.props.locked){
			switch(e.keyCode) {
				case 89:
					if(this.props.hide){
						this.props.dispatch({type: "ACHIEVEMENTS", value: false})
						this.playSound('openmenu')
					} else {
						this.props.dispatch({type: "ACHIEVEMENTS", value: true})
						this.playSound('closemenu')
					}
					break;
			}
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
		},4500)
	}

	render() {
		let props = this.props
		return (
			<div id="app">
					{ (props.loading) ? <Loading /> : null }
					<div>
						<Character location="main" current={props.action} action="stand" />
						<Character location="main" current={props.action} action="cheer" />
						<Character location="main" current={props.action} action="talk" />
						<Character location="main" current={props.action} action="laugh" />
						<Character location="main" current={props.action} action="cry" />
						<Character location="main" current={props.action} action="beg" />
						<Hud playRandom={this.playRandom} character={props.character}/>
						<AchievementPane hidden={props.hide} points={props.character.achievementPoints.toLocaleString()}>
							<Content page={(props.router.query.page) ? props.router.query.page : 'summary'} />
						</AchievementPane>
						<GetNew hidden={props.get}/>
					</div> 
			</div>
		)
	}
}

export default withRouter(connect(state=>state)(Index))