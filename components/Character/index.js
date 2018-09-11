import "./character.scss"
import classnames from 'classnames'
const Character = (props) => {
	let characterclass = classnames({
		"character": true,
		[props.action]: true,
		"show": (props.action === props.current || props.force),
		[props.location]: true
	})
	return (
		<div className={characterclass}></div>
	)
}


export default Character