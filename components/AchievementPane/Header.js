import "./header.scss"
const Header = (props) => (
	<div id="header">
		<div className="header-content">
			<h3>Achievement Points</h3>
			<div className="points">{props.points}</div>
		</div>
	</div>
)

export default Header