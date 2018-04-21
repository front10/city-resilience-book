import React from 'react';
import { storiesOf } from '@storybook/react';
import 'semantic-ui/dist/semantic.css';
import { Header, Button, Icon, Image, Rating, Divider, Checkbox, Table } from 'semantic-ui-react';

import lenaImageFile from '../../../../assets/images/avatar/small/lena.png';
import matthewImageFile from '../../../../assets/images/avatar/small/matthew.png';
import lindsayImageFile from '../../../../assets/images/avatar/small/lindsay.png';
import markImageFile from '../../../../assets/images/avatar/small/mark.png';


const TableExampleFullWidth = () => (
  <Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="4">
          <Button floated="right" icon labelPosition="left" primary size="small">
            <Icon name="user" /> Add User
          </Button>
          <Button size="small">Approve</Button>
          <Button disabled size="small">Approve All</Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

const TableExamplePadded = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
        <Table.HeaderCell>Effect</Table.HeaderCell>
        <Table.HeaderCell>Efficacy</Table.HeaderCell>
        <Table.HeaderCell>Consensus</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h2" textAlign="center">A</Header>
        </Table.Cell>
        <Table.Cell singleLine>Power Output</Table.Cell>
        <Table.Cell>
          <Rating icon="star" defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign="right">
            80% <br />
          <a href="#">18 studies</a>
        </Table.Cell>
        <Table.Cell>
            Creatine supplementation is the reference compound.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h2" textAlign="center">A</Header>
        </Table.Cell>
        <Table.Cell singleLine>Weight</Table.Cell>
        <Table.Cell>
          <Rating icon="star" defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign="right">
            100% <br />
          <a href="#">65 studies</a>
        </Table.Cell>
        <Table.Cell>
            Creatine is the reference compound for power improvement.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

const TableExampleCollapsing = () => (
  <Table basic="very" celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={lenaImageFile} rounded size="mini" />
            <Header.Content>
                Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            22
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={matthewImageFile} rounded size="mini" />
            <Header.Content>
                Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            15
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={lindsayImageFile} rounded size="mini" />
            <Header.Content>
                Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            12
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={markImageFile} rounded size="mini" />
            <Header.Content>
                Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
            11
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

const TableExamplePositiveNegative = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Image src={lenaImageFile} rounded size="mini" /></Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell negative>None</Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell>Jimmy</Table.Cell>
        <Table.Cell>
          <Icon name="checkmark" />
            Approved
        </Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell positive>
          <Icon name="close" />
            Requires call
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

storiesOf('Elements/Tables', module).add('All', () => {
  return (
    <div>
      <Header as="h1">Tables</Header>
      <Divider />
      <Header as="h3">Padded</Header>
      <TableExamplePadded />
      <Header as="h3">Full-Width Header / Footer</Header>
      <TableExampleFullWidth />
      <Header as="h3">Positive Negative</Header>
      <TableExamplePositiveNegative />
      <Header as="h3">Collapsing</Header>
      <TableExampleCollapsing />
    </div>
  );
});
