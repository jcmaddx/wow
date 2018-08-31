import SideNavLink from './SideNavLink'
import nav from '../../data/navigation.json'
import "./sidenav.scss"
const SideNav = (props) => (
  <div id="side-nav">
  	<ul>
  		{
  			Object.keys(nav).map((item, key) => {
  				return <SideNavLink key={key} title={nav[item]} page={item} />
  			})
  		}
  	</ul>
  </div>
)

export default SideNav