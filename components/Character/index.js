import "./character.scss"
const Character = (props) => (
	<div id={"character-"+props.location} className={"character " + props.action}></div>
)

export default Character