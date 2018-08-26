import './bar.scss'
const ActionBar = (props) => (
	<div id="actionbar">
		<div className="bar-frame">
			<div className="skills">
				<div className="primary">
					<div className="skill"><img src="/static/images/icons/bars/immolate.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/conflagrate.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/incinerate.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/chaos.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/havoc.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/rain.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/void.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/infernal.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/soulstone.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/healthstone.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/funnel.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/siphon.png" /></div>
				</div>
				<div className="secondary">
					<div className="skill"><img src="/static/images/icons/bars/burn.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/ritual.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/portal.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/dalaran.png" /></div>
					<div className="skill"><img src="/static/images/icons/bars/hearth.png" /></div>
				</div>
			</div>
		</div>
		<div className="ap-bar"></div>
	</div>
)

export default ActionBar