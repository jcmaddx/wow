import classnames from 'classnames'
import './icon.scss'
const Icon = (props) => {
	let iconclass = classnames({
		"icon": true,
		"framed": props.frame,
		[props.type]: !!props.type
	})
	return (
		<div className={iconclass}>
			{
				(props.keybind) ? 
				<p className="keybind">{props.keybind}</p>
				: null
			}
			{
				(props.uses) ? 
				<p className="uses">{props.uses}</p>
				: null
			}
			<img src={props.image} />
		</div>
	)
}


export default Icon