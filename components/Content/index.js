import achievements from '../../data/achievements'
import Achievement from '../Achievement'
import Character from '../Character'
import classnames from 'classnames'
import './content.scss'
const Content = (props) => {
	let data = achievements[props.page];
	let content;;
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
	let contentClass = classnames({
		"content": true,
		"dark": props.page !== 'summary',
		"text": props.page === 'summary'
	})
	return (
		<div id="content" className={contentClass}>
			{content}
		</div>
	)
}

export default Content