import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";
import { Header, Divider, Icon, Step, Segment, Image } from 'semantic-ui-react';

import imageFile from '../../../../assets/images/wireframe/paragraph.png';

const StepExampleGroup = () => (
  <Step.Group>
    <Step>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name="payment" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name="info" />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);

const StepExampleOrdered = () => (
  <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);

const StepExampleVertical = () => (
  <Step.Group vertical>
    <Step completed>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Icon name="payment" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name="info" />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);

const StepExampleAttached = () => (
  <div>
    <Step.Group attached="top">
      <Step>
        <Icon name="truck" />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name="payment" />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>

    <Segment attached>
      <Image src={imageFile} />
    </Segment>
  </div>
);

storiesOf('Elements/Steps', module).add('All', () => {
  return (
    <ThemeSelector>
      <div>
        <Header as="h1">Step</Header>
        <Divider />
        <Header as="h4">Group</Header>
        <StepExampleGroup />
        <Header as="h4">Ordered</Header>
        <StepExampleOrdered />
        <Header as="h4">Vertical</Header>
        <StepExampleVertical />
        <Header as="h4">Attached</Header>
        <StepExampleAttached />
      </div>
    </ThemeSelector>
  );
});
