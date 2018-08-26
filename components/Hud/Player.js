import "./player.scss"
const Player = (props) => {
	return(
		<div id="player">
			<div className="image"></div>
			<div className="name">{props.name}</div>
			<div className="bar health"><span>100%</span>{parseInt(props.health).toLocaleString()}</div>
			<div className="bar mana"><span>100%</span>{(parseInt(props.mana) / 1000) + " K"}</div>
			<div className="level">{props.level}</div>
		</div>
	)
}

export default Player