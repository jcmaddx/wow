import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Achievement from '../components/Achievement';

storiesOf('Achievement Pane', module)
  .add('Single Achievement', () => (
    <Achievement />
  ));