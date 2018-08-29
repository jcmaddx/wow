import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Character from '../components/Character';

storiesOf('Character Model', module)
  .add('Main Character Standing', () => (
    <Character location="main" action="stand" />
  ))
  .add('Main Character Cheering', () => (
    <Character location="main" action="cheer" />
  ))
  .add('Main Character Crying', () => (
    <Character location="main" action="cry" />
  ))
  .add('Main Character Laughing', () => (
    <Character location="main" action="laugh" />
  ))
  .add('Main Character Begging', () => (
    <Character location="main" action="beg" />
  ))
  .add('Main Character Talking', () => (
    <Character location="main" action="talk" />
  ))
  .add('Summary Character Talking', () => (
    <Character location="summary" action="talk" />
  ));