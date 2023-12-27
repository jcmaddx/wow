import achievements from '../../data/achievements'
import Achievement from '../Achievement'
import Character from '../Character'
import styles from './content.module.scss'
const Content = (props) => {
	let data = achievements[props.page];
	let content;
	if(props.page === 'summary') {
		content = (
			<div>
				<h1>{data.title}</h1>
				{
					data.content.map((item, key) => {
						return <p key={key}>{item}</p>
					})
				}
				<Character location="summary" action="talk" />
			</div>
		)
	} else {
		content = (
			<div>
				{
					data.map((item, key) => {
						return <Achievement key={key} unearned={item.unearned} special={item.special} reward={item.reward} title={item.title} description={item.description} points={item.points} date={item.date} image={item.icon} />
					})	
				}
			</div>
		)
	}
	return (
		<div id="content" className={`${styles.content} ${props.page === 'summary' ? styles.text : styles.dark}`}>
			{content}
		</div>
	)
}

export default Content