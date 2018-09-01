import "./character.scss"
import classnames from 'classnames'
const Character = (props) => {
	let characterclass = classnames({
		"character": true,
		[props.action]: true,
		"show": (props.action === props.current)
	})
	return (
		<div id={"character-"+props.location} className={characterclass}></div>
	)
}


export default Character