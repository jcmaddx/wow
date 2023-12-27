import styles from "./character.module.scss"
const Character = (props) => {
	return (
		<div className={`${styles.character} ${styles[props.action]} ${styles[props.location]} ${props.action === props.current || props.force ? styles.show : ''}`}></div>
	)
}


export default Character