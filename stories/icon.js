import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Icon from '../components/Icon'

storiesOf('Icons', module)
	.add('Simple Icon', () => (
    <Icon image="/static/images/icons/bars/hearth.png"/>
  ))
  .add('Icon with Keybind', () => (
    <Icon image="/static/images/icons/bars/dalaran.png" keybind="V"/>
  ))
  .add('Icon with Keybind and Uses', () => (
    <Icon image="/static/images/icons/bars/healthstone.png" keybind="9" uses="3" />
  ))
  .add('Icon with Frame', () => (
    <Icon image="/static/images/icons/achievements/references/nick.png" frame={true} />
  ));