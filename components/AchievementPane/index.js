import {connect} from "react-redux";
import SideNav from '../SideNav'
import Header from './Header'
import nav from '../../data/navigation.json'
import Link from 'next/link'
import './pane.scss'
const AchievementPane = (props) => (
  <div id="pane" className={(props.hidden) ? "hidden" : ""}>
  	<div className="close-pane" onClick={() => { props.playSound('closemenu'); props.dispatch({type: "ACHIEVEMENTS", value: true})}}></div>
  	<div className="inner">
  		<Header points={props.points} />
  		<SideNav />
	    {props.children}
  	</div>
  	<div className="mobile-nav">
  		{
  			Object.keys(nav).map((item, key) => {
  				return (
  					<Link key={key} as={`/${item}/`} href={`/?page=${item}`}>
  						<div className={"nav-mobile " + item} />
  					</Link>
  				)
  			})
  		}
  	</div>
  </div>
)

export default connect(state=>state)(AchievementPane)