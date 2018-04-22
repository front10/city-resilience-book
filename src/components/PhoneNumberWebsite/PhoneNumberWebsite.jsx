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
            translated: {}
        }
    }
    render() {
        const { toSeeMore, resourcess,sponsorIcon } = this.props
        const firsList = resourcess.slice(0, (resourcess.length / 2));
        const secondList = resourcess.slice((resourcess.length / 2) + 1);

        let translate = {
            static: PhoneNumberWebsiteLanguaje,
            content: {
              
            }
          };
          firsList.map((item, index) => {
            translate.content["value_firsList_name" + index] = item.name;
            translate.content["value_firsList_value" + index] = item.value;
            return item;
          });
          secondList.map((item, index) => {
            translate.content["value_secondList_name" + index] = item.name;
            translate.content["value_secondList_value" + index] = item.value;
            return item;
          });
          console.log("ranslate", translate);

        return <div className="PhoneNumberWebsite">
            <Segment.Group>

                <Segment>
                    <Grid columns={1} verticalAlign='middle' className="Segment_Header">
                        <Grid.Column>
                            <Header as='h2' className="resourcesMappping__header__title">
                                <Icon name='superpowers' />
                                <Header.Content>
                                    {PhoneNumberWebsiteLanguaje[this.state.selectedLanguage].mapTittle}
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={1} verticalAlign='middle'>
                        <Grid.Column floated='right' width={5}>
                        <LanguageSwitcher
                            floated='right'
                            translate={translate}
                            onLanguageChange={(language, translated) => {
                            this.setState({ selectedLanguage: language });
                            this.setState({translated: translated});
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
                                                    <List.Header className="PhoneNumberWebsite_listItemHeader">{this.state.translated["value_firsList_name" + i]}</List.Header>
                                                    {item.phone && <List.Icon name='phone' className="PhoneNumberWebsite_listItemIcon" />}
                                                    {item.phone && <List.Content><a href={`tel:${item.phone}`}>{item.phone}</a></List.Content>}
                                                    {item.value && <List.Content> {this.state.translated["value_firsList_value" + i]}</List.Content>}
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
                                                    <List.Header className="PhoneNumberWebsite_listItemHeader">{this.state.translated["value_secondList_name" + i]}</List.Header>
                                                    {item.phone && <List.Icon name='phone' className="PhoneNumberWebsite_listItemIcon" />}
                                                    {item.phone && <List.Content><a href={`tel:${item.phone}`}>{item.phone}</a></List.Content>}
                                                    {item.value && <List.Content> {this.state.translated["value_secondList_value" + i]}</List.Content>}
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

                    <Grid centered columns={2} verticalAlign='middle'>
                        <Grid.Column floated='left' width={5}>
                            <div className="ui small image">
                                <svg width="100" height="100">
                                    <image xlinkHref={sponsorIcon} x="0" y="0" width="100%" height="100%" />
                                </svg>
                            </div>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5} className="see-more-button-wrapper">
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
    resources: [],
    sponsorIcon: "https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg",
};

export default PhoneNumberWebsite;
