import achievements from '../../data/achievements'
const Content = (props) => {
	return (
		<div id="content">
			{props.page}
			{
				/*
				<ul>
		      {achievements.map((item, key) => (
		      	<li key={key}>{item.title}</li>
		      ))}
		    </ul>
				*/
			}
		</div>
	)
}

export default Content