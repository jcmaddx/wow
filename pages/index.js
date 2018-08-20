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
		<Character location="main" action="cheer" />
		<Hud />
		<AchievementPane>
			<Content page={(props.router.query.page) ? props.router.query.page : 'summary'} />
		</AchievementPane>
	</div>
));

export default Index