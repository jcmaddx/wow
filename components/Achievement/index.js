import classnames from 'classnames'
import Icon from '../Icon'
import './achievement.scss'
const Achievement = (props) => {
	let achclass = classnames({
		"achievement": true,
		"unearned": props.unearned,
		"special": props.special
	});
	return (
		<div className={achclass}>
			<Icon image={props.image} frame={true} />
			<h4>{props.title}</h4>
			<div className="description">
				<p>{props.description}</p>
			</div>
			{
				(props.reward) ? 
					<div className="reward">
						<p>{props.reward}</p>
					</div>
				: null
			}
			<div className="points">
				<div className="shield">{props.points}</div>
				{
					(props.date) ? 
						<p className="date">{props.date}</p>
					: null
				}
			</div> 
		</div>
	)
}


export default Achievement