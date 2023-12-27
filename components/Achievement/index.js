import Icon from '../Icon'
import styles from './achievement.module.scss'
const Achievement = (props) => {
	return (
		<div className={`${styles.achievement} ${props.unearned ? styles.unearned : ''} ${props.special ? styles.special : ''}`}>
			<Icon image={props.image} frame={true} type="achievement" />
			<h4>{props.title}</h4>
			<div className={styles.description}>
				<p>{props.description}</p>
			</div>
			{
				(props.reward) ? 
					<div className={styles.reward}>
						<p>{props.reward}</p>
					</div>
				: null
			}
			<div className={styles.points}>
				<div className={styles.shield}>{props.points}</div>
				{
					(props.date) ? 
						<p className={styles.date}>{props.date}</p>
					: null
				}
			</div> 
		</div>
	)
}


export default Achievement