// import sidebar component
import SideNav from '../SideNav'
import Header from './Header'
const AchievementPane = (props) => (
  <div id="main">
  	<SideNav />
  	<Header />
    {props.children}
  </div>
)

export default AchievementPane