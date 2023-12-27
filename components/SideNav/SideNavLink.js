import Link from 'next/link'
import styles from "./sideNavLink.module.scss"
const SideNavLink = (props) => (
	<li className={styles.sidenavlink}>
		<Link as={`/${props.page}/`} href={`/?page=${props.page}`}>
			<span>{props.title}</span>
		</Link>
	</li>
)

export default SideNavLink