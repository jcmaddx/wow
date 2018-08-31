import './actionBar.scss'
import Icon from '../Icon'
import skills from '../../data/skills.json'
const ActionBar = (props) => (
	<div id="actionbar">
		<div className="bar-frame">
			<div className="skills">
				<div className="primary">
					{
						Object.keys(skills.primary).map((i, key) => {
							let item = skills.primary[i];
							return <Icon key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
						})
					}
				</div>
				<div className="secondary">
					{
						Object.keys(skills.secondary).map((i, key) => {
							let item = skills.secondary[i];
							return <Icon key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
						})
					}
				</div>
			</div>
		</div>
		<div className="ap-bar"></div>
	</div>
)

export default ActionBar