import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/character.js');
	require('../stories/hud.js');
	require('../stories/icon.js');
	require('../stories/achievements.js');
	require('../stories/sidenav.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);