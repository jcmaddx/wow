import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Player from '../components/Hud/Player'
import MiniMap from '../components/Hud/MiniMap'
import Chat from '../components/Hud/Chat';
import ActionBar from '../components/Hud/ActionBar'

storiesOf('Hud', module)
  .add('Player Frame', () => (
    <Player />
  ))
  .add('Minimap', () => (
    <MiniMap />
  ))
  .add('Chat', () => (
    <Chat />
  ))
  .add('Action Bars', () => (
    <ActionBar />
  ));  