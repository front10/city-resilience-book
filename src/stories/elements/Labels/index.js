import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header, Divider, Icon, Label, Form, Menu, Grid, Image, Segment } from 'semantic-ui-react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";
import imageFile from '../../../../assets/images/wireframe/paragraph.png';

const LabelExampleGroupTag = () => (
  <Label.Group tag>
    <Label as="a">$10.00</Label>
    <Label as="a">$19.99</Label>
    <Label as="a">$24.99</Label>
    <Label as="a">$30.99</Label>
    <Label as="a">$10.25</Label>
  </Label.Group>
);

const LabelExamplePointing = () => (
  <Form>
    <Form.Field>
      <input type="text" placeholder="First name" />
      <Label pointing>Please enter a value</Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label pointing="below">Please enter a value</Label>
      <input type="text" placeholder="Last Name" />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type="text" placeholder="Username" />
      <Label pointing="left">That name is taken!</Label>
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <Label pointing="right">Your password must be 6 characters or more</Label>
      <input type="password" placeholder="Password" />
    </Form.Field>
  </Form>
);

const LabelExampleTag = () => (
  <div>
    <Label as="a" tag>New</Label>
    <Label as="a" color="red" tag>Upcoming</Label>
    <Label as="a" color="teal" tag>Featured</Label>
  </div>
);

const LabelExampleFloating = () => (
  <Menu compact>
    <Menu.Item as="a">
      <Icon name="mail" /> Messages
      <Label color="red" floating>22</Label>
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="users" /> Friends
      <Label color="teal" floating>22</Label>
    </Menu.Item>
  </Menu>
);


const LabelExampleRibbon = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as="a" color="red" ribbon>Overview</Label>
        <span>Account Details</span>

        <Image src={imageFile} />

        <Label as="a" color="blue" ribbon>Community</Label>
        <span>User Reviews</span>

        <Image src={imageFile} />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as="a" color="orange" ribbon="right">Specs</Label>
        <Image src={imageFile} />

        <Label as="a" color="teal" ribbon="right">Reviews</Label>
        <Image src={imageFile} />
      </Segment>
    </Grid.Column>
  </Grid>
);

storiesOf('Elements/Labels', module).add('All', () => {
  return (
    <ThemeSelector>
      <div>
        <Header as="h1">Labels</Header>
        <Divider />
        <Header as="h4">Tag</Header>
        <LabelExampleTag />
        <Header as="h4">Tag group</Header>
        <LabelExampleGroupTag />
        <Header as="h4">Pointing</Header>
        <LabelExamplePointing />
        <Header as="h4">Floating</Header>
        <LabelExampleFloating />
        <Header as="h4">Ribbon</Header>
        <LabelExampleRibbon />
      </div>
    </ThemeSelector>
  );
});
