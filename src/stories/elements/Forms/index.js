import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Header, Divider, Message } from 'semantic-ui-react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="First name" placeholder="First name" />
          <Form.Field control={Input} label="Last name" placeholder="Last name" />
          <Form.Field control={Select} label="Gender" options={options} placeholder="Gender" />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label="One" value="1" checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label="Two" value="2" checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label="Three" value="3" checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label="About" placeholder="Tell us more about you..." />
        <Form.Field control={Checkbox} label="I agree to the Terms and Conditions" />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

const FormExampleSuccess = () => (
  <Form success>
    <Form.Input label="Email" placeholder="joe@schmoe.com" />
    <Message
      success
      header="Form Completed"
      content="You're all signed up for the newsletter"
    />
    <Button>Submit</Button>
  </Form>
);

const FormExampleFieldError = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input fluid label="First name" placeholder="First name" error />
      <Form.Input fluid label="Last name" placeholder="Last name" />
    </Form.Group>
    <Form.Select options={options} placeholder="Gender" error />
    <Form.Checkbox label="I agree to the Terms and Conditions" error />
  </Form>
);

storiesOf('Elements/Forms', module).add('Simple', () => {
  return (
    <ThemeSelector>
      <div>
        <Header as="h1">Forms</Header>
        <Divider />
        <Header as="h3">Simple</Header>
        <FormExampleForm />
        <Header as="h3">Custom Control</Header>
        <FormExampleFieldControl />
        <Header as="h3">Success</Header>
        <FormExampleSuccess />
        <Header as="h3">Field Error</Header>
        <FormExampleFieldError />
      </div>
    </ThemeSelector>
  );
});
