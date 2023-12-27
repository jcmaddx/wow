import styles from './icon.module.scss'
const Icon = (props) => {
	return (
		<div onClick={(props.cb) ? props.cb : () => { return false }} className={`${styles.icon} ${props.frame ? styles.framed : ''} ${props.type === 'achievement' ? styles.achievement : ''} ${props.type === 'skill' ? styles.skill : ''}`}>
			{
				(props.keybind) ? 
				<p className={styles.keybind}>{props.keybind}</p>
				: null
			}
			{
				(props.uses) ? 
				<p className={styles.uses}>{props.uses}</p>
				: null
			}
			<img src={props.image} />
		</div>
	)
}


export default Icon