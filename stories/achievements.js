import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Achievement from '../components/Achievement';
import AchievementPane from '../components/AchievementPane'
import Content from '../components/Content'
import GetNew from '../components/Achievement/GetNew'

storiesOf('Achievements', module)
	.add('Achievement Get', () => (
    <GetNew />
  ))
	.add('Achievement Window', () => (
    <AchievementPane points="12,625">
			<Content page="summary" />
		</AchievementPane>
  ))
  .add('Incomplete Achievement', () => (
    <Achievement unearned={true} title="Unearned Achievement" description="You have not gotten this" points="200" image="/static/images/icons/achievements/references/jason.png" />
  ))
  .add('Completed Achievement', () => (
    <Achievement title="Completed Achievement" description="You have earned this" points="120" date="11/11/16" image="/static/images/icons/achievements/references/andrew.png" />
  ))
  .add('Global Completed Achievement', () => (
    <Achievement special={true} title="Special Achievement" description="This one is blue" points="500" date="12/24/12" image="/static/images/icons/achievements/references/nick.png" />
  ))
  .add('Completed Achievement w/ Reward', () => (
    <Achievement reward="Title: Badass" title="A Rewarding Feat" description="You did a thing for this thing." points="350" image="/static/images/icons/achievements/references/doug.png" />
  ));