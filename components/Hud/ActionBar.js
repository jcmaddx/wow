import {useContext} from 'react'
import styles from './actionBar.module.scss'
import {Context} from '../../pages/appContext'
import Icon from '../Icon'
import skills from '../../data/skills.json'
const ActionBar = (props) => {
	const { state, dispatch } = useContext(Context);

	let togglePane = () => {
		if(state.hide){
			dispatch({type: 'ACHIEVEMENTS', value: false})
			props.playSound('openmenu')
		} else {
			dispatch({type: 'ACHIEVEMENTS', value: true})
			props.playSound('closemenu')
		}
	}
	return (
		<div className="bars">
			<div id="actionbar" className={styles.actionbar}>
				<div className={styles.barframe}>
					<div className={styles.skills}>
						<div className={styles.primary}>
							{
								Object.keys(skills.primary).map((i, key) => {
									let item = skills.primary[i];
									return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
								})
							}
						</div>
						<div className={styles.achievebutton} onClick={togglePane}></div>
						<div className={styles.secondary}>
							{
								Object.keys(skills.secondary).map((i, key) => {
									let item = skills.secondary[i];
									return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
								})
							}
						</div>
					</div>
				</div>
				<div className={styles.apbar}></div>
			</div>
			<div id="mobile-bar" className={styles.mobilebar}>
				<div className={styles.left}>
					{
						Object.keys(skills.left).map((i, key) => {
							let item = skills.left[i];
							return <Icon cb={(item.emote) ? () => {props.handleEmote(i, item.timer)} : props.playRandom} key={key} type="skill" image={item.image} keybind={item.keybind} uses={item.uses} />
						})
					}
				</div>
				<div className={styles.achievebutton} onClick={togglePane}></div>
				<div className={styles.right}>
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

export default ActionBar