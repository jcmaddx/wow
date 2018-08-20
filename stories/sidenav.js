import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideNavLink from '../components/SideNav/SideNavLink';

storiesOf('Navigation', module)
  .add('Nav Links', () => (
  	<ul>
  		<SideNavLink title="Summary" page="summary" />
  		<SideNavLink title="Professions" page="professions" />
  		<SideNavLink title="Reputation" page="reputation" />
  		<SideNavLink title="Exploration" page="exploration" />
  	</ul>
    
  ));  