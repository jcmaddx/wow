import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Achievement from '../components/Achievement';
import AchievementPane from '../components/AchievementPane'
import GetNew from '../components/Achievement/GetNew'

storiesOf('Achievements', module)
	.add('Achievement Get', () => (
    <GetNew />
  ))
	.add('Achievement Window', () => (
    <AchievementPane />
  ))
  .add('Incomplete Achievement', () => (
    <Achievement />
  ))
  .add('Completed Achievement', () => (
    <Achievement />
  ))
  .add('Global Completed Achievement', () => (
    <Achievement />
  ))
  .add('Completed Achievement w/ Reward', () => (
    <Achievement />
  ));