let now = new Date()
import Clock from './Clock';
import styles from "./minimap.module.scss" 
const MiniMap = (props) => (
	<div id="minimap" className={styles.minimap}>
		<h3>Proudmoore Keep</h3>
		<div className={styles.date}>{now.getDate()}</div>
		<div className={styles.time}><Clock /></div>
	</div>
)

export default MiniMap