let now = new Date()
import Clock from './Clock';
import "./minimap.scss" 
const MiniMap = (props) => (
	<div id="minimap">
		<h3>Proudmoore Keep</h3>
		<div className="date">{now.getDate()}</div>
		<div className="time"><Clock /></div>
	</div>
)

export default MiniMap