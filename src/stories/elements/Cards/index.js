import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Icon, Header, Button, Image, Divider, Feed } from 'semantic-ui-react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";
import lenaImageFile from '../../../../assets/images/avatar/small/lena.png';
import matthewImageFile from '../../../../assets/images/avatar/small/matthew.png';
import lindsayImageFile from '../../../../assets/images/avatar/small/lindsay.png';
import markImageFile from '../../../../assets/images/avatar/small/mark.png';

const CardExampleCard = () => (
  <Card>
    <Image src={matthewImageFile} />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className="date">
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={markImageFile} />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Approve</Button>
          <Button basic color="red">Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={lindsayImageFile} />
        <Card.Header>
          Molly Thomas
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Approve</Button>
          <Button basic color="red">Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={lenaImageFile} />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Approve</Button>
          <Button basic color="red">Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);

const CardExampleContentBlock = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Recent Activity
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={lindsayImageFile} />
          <Feed.Content>
            <Feed.Date content="1 day ago" />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={matthewImageFile} />
          <Feed.Content>
            <Feed.Date content="3 days ago" />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={lindsayImageFile} />
          <Feed.Content>
            <Feed.Date content="4 days ago" />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);


storiesOf('Elements/Cards', module).add('Simple', () => {
  return (
    <ThemeSelector>
      <div>
        <Header as="h1">Card</Header>
        <Divider />
        <Header as="h3">Simple</Header>
        <CardExampleCard />
        <Header as="h3">Groups</Header>
        <CardExampleGroups />
        <Header as="h3">Content Block</Header>
        <CardExampleContentBlock />
      </div>
    </ThemeSelector>
  );
});
