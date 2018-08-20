import SideNavLink from './SideNavLink'

const SideNav = (props) => (
  <div id="side-nav">
  	<ul>
  		<SideNavLink title="Summary" page="summary" />
  		<SideNavLink title="Professions" page="professions" />
  		<SideNavLink title="Exploration" page="exploration" />
  		<SideNavLink title="Reputation" page="reputation" />
  	</ul>
  </div>
)

export default SideNav