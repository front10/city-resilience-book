import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Input, Message, Grid, Header, Button, Icon, Image, List, Label } from 'semantic-ui-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import PhoneNumberWebsiteLanguaje from './PhoneNumberWebsiteLanguaje';
import './style.scss';

class PhoneNumberWebsite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: this.props.selectedLanguage,
        }
    }
    render() {
        const { toSeeMore, resourcess } = this.props
        const firsList = resourcess.slice(0, (resourcess.length / 2));
        const secondList = resourcess.slice((resourcess.length / 2)+1);
        console.log('first', firsList);
        console.log('second', secondList);

        return <div className="PhoneNumberWebsite">
            <Segment.Group>
                <Segment>
                    <Grid stackable columns={2} verticalAlign='middle'>
                        <Grid.Column>
                            <Header as='h2' className="resourcesMappping__header__title">
                                <Icon name='superpowers' />
                                <Header.Content>
                                    {PhoneNumberWebsiteLanguaje[this.state.selectedLanguage].mapTittle}
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid>
                    <Grid stackable columns={1} verticalAlign='middle'>
                        <Grid.Column floated='left' width={5}>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <LanguageSwitcher
                                floated='right'
                                onLanguageChange={(language) => {
                                    this.setState({ selectedLanguage: language });
                                }}
                            />
                        </Grid.Column>
                    </Grid>


                    <Grid columns={2} divided>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment className="PhoneNumberWebsite__segment">
                                    <List>
                                        {
                                            firsList.map((item, i) => {
                                                return <List.Item key={i}>
                                                    <List.Header className="PhoneNumberWebsite_listItemHeader">{item.name}</List.Header>
                                                    {item.phone && <List.Icon name='phone' className="PhoneNumberWebsite_listItemIcon" />}
                                                    {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
                                                    {item.value && <List.Content> {item.value}</List.Content>}
                                                    {item.tty && <List.Content>TTY:{item.tty}</List.Content>}
                                                    {item.url && <List.Content className="PhoneNumberWebsite_listItemHeader_url"> {item.url}</List.Content>}
                                                </List.Item>
                                            })
                                        }
                                    </List>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment className="PhoneNumberWebsite__segment">
                                    <List>
                                        {
                                            secondList.map((item, i) => {
                                                return <List.Item key={i}>
                                                    <List.Header className="PhoneNumberWebsite_listItemHeader">{item.name}</List.Header>
                                                    {item.phone && <List.Icon name='phone' className="PhoneNumberWebsite_listItemIcon" />}
                                                    {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
                                                    {item.value && <List.Content> {item.value}</List.Content>}
                                                    {item.tty && <List.Content>TTY:{item.tty}</List.Content>}
                                                    {item.url && <List.Content className="PhoneNumberWebsite_listItemHeader_url"> {item.url}</List.Content>}
                                                </List.Item>
                                            })
                                        }
                                    </List>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid stackable columns={1} verticalAlign='middle'>
                        <Grid.Column floated='left' width={5}>
                            <Image src='https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg' size='small' />
                        </Grid.Column>
                        <Grid.Column floated='right' width={5} className="PhoneNumberWebsite__seeMoreContainer">
                            <a href={toSeeMore} className="ui button">{PhoneNumberWebsiteLanguaje[this.state.selectedLanguage].buttonSeemore}</a>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Segment.Group>
        </div>
    }
}

PhoneNumberWebsite.propTypes = {
    resources: PropTypes.array
};

PhoneNumberWebsite.defaultProps = {
    selectedLanguage: 'en',
    toSeeMore: 'http://www.miamidade.gov/emergency/',
    resources: []
};

export default PhoneNumberWebsite;
