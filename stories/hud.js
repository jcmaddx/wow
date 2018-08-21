import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Player from '../components/Hud/Player'
import MiniMap from '../components/Hud/MiniMap'
import Chat from '../components/Hud/Chat';
import ActionBar from '../components/Hud/ActionBar'

storiesOf('Hud', module)
  .add('Player Frame', () => (
    <Player health="100000" mana="99999" name="Character Name" level="120" />
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