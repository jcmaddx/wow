import styles from "./player.module.scss"
const Player = (props) => {
	return(
		<div id="player" className={styles.player}>
			<div className={styles.frame} />
			<div className={styles.image} />
			<div className={styles.name}>{props.name}</div>
			<div className={`${styles.bar} ${styles.health}`}><span>100%</span>{parseInt(props.health).toLocaleString()}</div>
			<div className={`${styles.bar} ${styles.mana}`}><span>100%</span>{(parseInt(props.mana) / 1000) + " K"}</div>
			<div className={styles.level}>{props.level}</div>
		</div>
	)
}

export default Player