import './actionBar.scss'
import Icon from '../Icon'
import skills from '../../data/skills.json'
import {connect} from "react-redux";
const ActionBar = (props) => {
	let togglePane = () => {
		if(props.hide){
			props.dispatch({type: "ACHIEVEMENTS", value: false})
			props.playSound('openmenu')
		} else {
			props.dispatch({type: "ACHIEVEMENTS", value: true})
			props.playSound('closemenu')
		}
	}
	return (
		<div className="bars">
			<div id="actionbar">
				<div className="bar-frame">
					<div className="skills">
						<div className="primary">
							{
								Object.keys(skills.primary).map((i, key) => {
									let item = skills.primary[i];
									return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
								})
							}
						</div>
						<div className="achieve-button" onClick={togglePane}></div>
						<div className="secondary">
							{
								Object.keys(skills.secondary).map((i, key) => {
									let item = skills.secondary[i];
									return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
								})
							}
						</div>
					</div>
				</div>
				<div className="ap-bar"></div>
			</div>
			<div id="mobile-bar">
				<div className="left">
					{
						Object.keys(skills.left).map((i, key) => {
							let item = skills.left[i];
							return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
						})
					}
				</div>
				<div className="achieve-button" onClick={togglePane}></div>
				<div className="right">
					{
						Object.keys(skills.right).map((i, key) => {
							let item = skills.right[i];
							return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
						})
					}
				</div>
			</div>
		</div>
		
	)
}

export default connect(state=>state)(ActionBar)