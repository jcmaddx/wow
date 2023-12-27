import {useContext} from 'react'
import { Context } from '../../utils/appContext'
import SideNav from '../SideNav'
import Header from './Header'
import nav from '../../data/navigation.json'
import Link from 'next/link'
import styles from './pane.module.scss'
const AchievementPane = (props) => {
	const {state, dispatch} = useContext(Context);
	return (
		<div id="pane" className={`${styles.pane} ${state.hide ? styles.hidden : ''}`}>
			<div className={styles.closepane} onClick={() => { props.playSound('closemenu'); dispatch({type: 'ACHIEVEMENTS', value: true})}}></div>
			<div className={styles.inner}>
				<Header points={props.points} />
				<SideNav />
				{props.children}
			</div>
			<div className={styles.mobilenav}>
				{
					Object.keys(nav).map((item, key) => {
						return (
							<Link key={key} as={`/${item}/`} href={`/?page=${item}`}>
								<div className={`${styles.navmobile} ${styles[item]}`} />
							</Link>
						)
					})
				}
			</div>
		</div>
	)
}

export default AchievementPane