import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import AchievementPane from '../components/AchievementPane'
import Content from '../components/Content'
import Character from '../components/Character'
import Hud from '../components/Hud'

import "./global.scss"

//import achievements from '../data/achievements'

const Index = withRouter((props) => (
	<div id="app">
		<Character location="main" action="stand" />
		<Hud character={props.character}/>
		<AchievementPane>
			<Content page={(props.router.query.page) ? props.router.query.page : 'summary'} />
		</AchievementPane>
	</div>
));

Index.getInitialProps = async function() {
  const res = await fetch('https://us.api.battle.net/wow/character/Nesingwary/Maygus?fields=stats&locale=en_US&apikey=nhpy2sjgwgy2gk3q557ka9r6vvjkq288')
  const data = await res.json()
  return {
    character: data
  }
}


export default Index