import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Player from '../components/Hud/Player'
import MiniMap from '../components/Hud/MiniMap'
import Chat from '../components/Hud/Chat'
import ChatBubble from '../components/Hud/ChatBubble'
import ActionBar from '../components/Hud/ActionBar'

const mockStore = configureStore();
const store = mockStore({
  text: "Thanks for Visiting"
}) 

storiesOf('Hud', module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add('Player Frame', () => (
    <Player health="100000" mana="10000" name="Character Name" level="120" />
  ))
  .add('Minimap', () => (
    <MiniMap />
  ))
  .add('Chat Bubble', () => (
    <ChatBubble />
  ))
  .add('Action Bar', () => (
    <ActionBar />
  ))
  .add('Chat', () => (
    <Chat />
  ));  