import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideNavLink from '../components/SideNav/SideNavLink';

storiesOf('Navigation', module)
  .add('Nav Link', () => (
  	<ul>
  		<SideNavLink title="Sidenav Link" page="test" />
  	</ul>
  ));  