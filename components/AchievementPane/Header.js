import styles from "./header.module.scss"
const Header = (props) => (
	<div id="header" className={styles.header}>
		<div className={styles.headercontent}>
			<h3>Achievement Points</h3>
			<div className={styles.points}>{props.points}</div>
		</div>
	</div>
)

export default Header