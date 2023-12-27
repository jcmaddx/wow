import styles from './getNew.module.scss'
const GetNew = (props) => (
	<div className={`${styles.achievementget} ${props.hidden ? styles.hidden : ''}`}>
		<div className={styles.shine} />
		<h2>Achievement Earned</h2>
		<h3>View an Awesome Resume</h3>
	</div>
)

export default GetNew