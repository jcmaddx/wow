import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Character from '../components/Character';

storiesOf('Character Model', module)
  .add('Main Character Standing', () => (
    <Character location="main" action="cheer" />
  ))
  .add('Main Character Sitting', () => (
    <Character location="main" action="sit" />
  ))
  .add('Main Character Dancing', () => (
    <Character location="main" action="dance" />
  ))
  .add('Main Character Waving', () => (
    <Character location="main" action="wave" />
  ))
  .add('Main Character Laughing', () => (
    <Character location="main" action="laugn" />
  ))
  .add('Summary Character Talking', () => (
    <Character location="summary" action="talk" />
  ));