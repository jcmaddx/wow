import Link from 'next/link'
import "./sideNavLink.scss"
const SideNavLink = (props) => (
	<li className="sidenav-link">
		<Link as={`/${props.page}/`} href={`/?page=${props.page}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

export default SideNavLink