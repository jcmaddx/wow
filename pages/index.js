import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import AchievementPane from '../components/AchievementPane'
import Content from '../components/Content'
import Character from '../components/Character'
import Hud from '../components/Hud'

import "./global.scss"

class Main extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			action: "stand"
		}
	}

	static async getInitialProps() {
		const res = await fetch('https://us.api.battle.net/wow/character/Nesingwary/Maygus?fields=stats&locale=en_US&apikey=nhpy2sjgwgy2gk3q557ka9r6vvjkq288')
	  const data = await res.json()
	  return {
	    character: data
	  }
	}

	render() {
		let props = this.props;
		return (
			<div id="app">
				<Character location="main" action={this.state.action} />
				<Hud character={props.character}/>
				<AchievementPane hidden={true} points={props.character.achievementPoints.toLocaleString()}>
					<Content page={(props.router.query.page) ? props.router.query.page : 'summary'} />
				</AchievementPane>
			</div>
		)
	}
}

export default withRouter(Main)