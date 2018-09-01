import './loading.scss'
const Loading = (props) => (
	<div className="loading">
		<div id="loading-bar">
			<div className="frame"></div>
			<div id="progress"></div>
		</div>
	</div>
)

export default Loading