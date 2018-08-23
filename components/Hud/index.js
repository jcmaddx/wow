import Player from './Player'
import MiniMap from './MiniMap'
import Chat from './Chat';
import ChatBubble from './ChatBubble';
import ActionBar from './ActionBar'

const Hud = (props) => (
	<div id="hud">
		<Player health={props.character.stats.health} mana={props.character.stats.power} name={props.character.name} level={props.character.level} />
		<MiniMap />
		<ChatBubble text="Somet text in a bubble"/>
		<Chat />
		<ActionBar />
	</div>
)

export default Hud