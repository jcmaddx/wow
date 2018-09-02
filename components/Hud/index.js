import Player from './Player'
import MiniMap from './MiniMap'
import Chat from './Chat';
import ChatBubble from './ChatBubble';
import ActionBar from './ActionBar'

const Hud = (props) => (
	<div id="hud">
		<Player health={props.character.stats.health} mana={props.character.stats.power} name={props.character.name} level={props.character.level} />
		<MiniMap />
		<ChatBubble hidden={true}/>
		<Chat />
		<ActionBar handleEmote={props.handleEmote} playSound={props.playSound} playRandom={props.playRandom}/>
	</div>
)

export default Hud