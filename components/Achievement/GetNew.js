import './getNew.scss'
const GetNew = (props) => (
	<div className={"achievement-get" + ((props.hidden) ? " hidden" : "")}>
		<div className="shine" />
		<h2>Achievement Earned</h2>
		<h3>View an Awesome Resume</h3>
	</div>
)

export default GetNew