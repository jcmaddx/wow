// import sidebar component
import SideNav from '../SideNav'
import Header from './Header'
const MainLayout = (props) => (
  <div id="main">
  	<SideNav />
  	<Header />
    {props.children}
  </div>
)

export default MainLayout