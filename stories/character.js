import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Character from '../components/Character';

storiesOf('Character Model', module)
  .add('Main Character Standing', () => (
    <Character location="main" action="stand" force={true} />
  ))
  .add('Main Character Cheering', () => (
    <Character location="main" action="cheer" force={true} />
  ))
  .add('Main Character Crying', () => (
    <Character location="main" action="cry" force={true} />
  ))
  .add('Main Character Laughing', () => (
    <Character location="main" action="laugh" force={true} />
  ))
  .add('Main Character Begging', () => (
    <Character location="main" action="beg" force={true} />
  ))
  .add('Main Character Talking', () => (
    <Character location="main" action="talk" force={true} />
  ))
  .add('Summary Character Talking', () => (
    <Character location="summary" action="talk" force={true} />
  ));