import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header, Divider, Button, Icon, Label } from 'semantic-ui-react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name="right arrow" />
      </Button.Content>
    </Button>
    <Button animated="vertical">
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>
    <Button animated="fade">
      <Button.Content visible>
        Sign-up for a Pro account
      </Button.Content>
      <Button.Content hidden>
        $12.99 a month
      </Button.Content>
    </Button>
  </div>
);

const ButtonExampleLabeled = () => (
  <div>
    <Button as="div" labelPosition="right">
      <Button icon>
        <Icon name="heart" />
        Like
      </Button>
      <Label as="a" basic pointing="left">2,048</Label>
    </Button>
    <Button as="div" labelPosition="left">
      <Label as="a" basic pointing="right">2,048</Label>
      <Button icon>
        <Icon name="heart" />
        Like
      </Button>
    </Button>
    <Button as="div" labelPosition="left">
      <Label as="a" basic>2,048</Label>
      <Button icon>
        <Icon name="fork" />
      </Button>
    </Button>
  </div>
);

const ButtonExampleBasic = () => (
  <div>
    <Button basic>Standard</Button>
    <Button basic color="red">Red</Button>
    <Button basic color="orange">Orange</Button>
    <Button basic color="yellow">Yellow</Button>
    <Button basic color="olive">Olive</Button>
    <Button basic color="green">Green</Button>
    <Button basic color="teal">Teal</Button>
    <Button basic color="blue">Blue</Button>
    <Button basic color="violet">Violet</Button>
    <Button basic color="purple">Purple</Button>
    <Button basic color="pink">Pink</Button>
    <Button basic color="brown">Brown</Button>
    <Button basic color="grey">Grey</Button>
    <Button basic color="black">Black</Button>
  </div>
);

const ButtonExampleGroupIcon = () => (
  <div>
    <Button.Group>
      <Button icon>
        <Icon name="align left" />
      </Button>
      <Button icon>
        <Icon name="align center" />
      </Button>
      <Button icon>
        <Icon name="align right" />
      </Button>
      <Button icon>
        <Icon name="align justify" />
      </Button>
    </Button.Group>
    {' '}
    <Button.Group>
      <Button icon>
        <Icon name="bold" />
      </Button>
      <Button icon>
        <Icon name="underline" />
      </Button>
      <Button icon>
        <Icon name="text width" />
      </Button>
    </Button.Group>
  </div>
);

const ButtonExampleLoading = () => (
  <div>
    <Button loading>Loading</Button>
    <Button basic loading>Loading</Button>
    <Button loading primary>Loading</Button>
    <Button loading secondary>Loading</Button>
  </div>
);

storiesOf('Elements/Buttons', module).add('All', () => {
  return (
    <ThemeSelector>
      <div>
        <Header as="h1">Buttons</Header>
        <Divider />
        <Header as="h4">Animated</Header>
        <ButtonExampleAnimated />
        <Header as="h4">Labeled</Header>
        <ButtonExampleLabeled />
        <Header as="h4">Basic</Header>
        <ButtonExampleBasic />
        <Header as="h4">Group Icons</Header>
        <ButtonExampleGroupIcon />
        <Header as="h4">Loading</Header>
        <ButtonExampleLoading />
      </div>
    </ThemeSelector>
  );
});
