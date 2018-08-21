import Player from './Player'
import MiniMap from './MiniMap'
import Chat from './Chat';
import ActionBar from './ActionBar'

const Hud = (props) => (
	<div id="hud">
		<Player health={props.character.stats.health} mana={props.character.stats.power} name={props.character.name} level={props.character.level} />
		<MiniMap />
		<Chat />
		<ActionBar />
	</div>
)

export default Hud