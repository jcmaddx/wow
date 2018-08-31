import "./header.scss"
const Header = (props) => (
	<div id="header">
		<h3>Achievement Points</h3>
		<div className="points">{props.points}</div>
	</div>
)

export default Header