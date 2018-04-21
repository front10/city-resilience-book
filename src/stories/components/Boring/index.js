import React from 'react';
import { storiesOf } from '@storybook/react';
import Boring from '../../../components/Boring';
import Readme from '../../../components/Boring/readme.md';

storiesOf('Components/Boring', module).add('Default', () => {
  return <Boring source={Readme} />;
});
