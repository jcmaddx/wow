import Player from './Player'
import MiniMap from './MiniMap'
import Chat from './Chat';
import ActionBar from './ActionBar'

const Hud = (props) => (
	<div id="hud">
		<Player />
		<MiniMap />
		<Chat />
		<ActionBar />
	</div>
)

export default Hud