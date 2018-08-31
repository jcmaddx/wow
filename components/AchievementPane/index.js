// import sidebar component
import SideNav from '../SideNav'
import Header from './Header'
import './pane.scss'
const AchievementPane = (props) => (
  <div id="pane" className={(props.hidden) ? "hidden" : ""}>
  	<div className="inner">
  		<Header points={props.points} />
  		<SideNav />
	    {props.children}
  	</div>
  </div>
)

export default AchievementPane