import React from 'react';
import { Column, Description, Grid, Header, Image, List, Segment, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import WatchesWarningsHuracaneLanguaje from './WatchesWarningsHuracaneLanguaje';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import './style.scss';

class WatchesWarningsHuracane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: this.props.selectedLanguage,
            translated: {}
        };
    }

    render() {
        let _class = this.props.style.color === 'red' ? 'amination__name__pulse alert__' + this.props.style.color : 'alert__' + this.props.style.color;
        return (
            <div>
                <Segment>
                    {
                        this.props.showHeader &&
                        <Grid columns={2} verticalAlign='middle' className="Segment_Header">
                            <Grid.Column floated='right' width={11}>
                                {
                                    this.props.showTitle &&
                                    <Header as='h2'>
                                        {
                                            this.props.showTitleIcon &&
                                            <Icon name={this.props.icon} />
                                        }
                                        {
                                            this.props.showTitleText &&
                                            <Header.Content>
                                                {this.state.translated.titleText}
                                            </Header.Content>
                                        }
                                    </Header>
                                }
                            </Grid.Column>
                            <Grid.Column floated='right' width={5}>
                                {
                                    this.props.showLanguageDropdown &&
                                    <LanguageSwitcher
                                        floated='right'
                                        translate={{
                                            static: WatchesWarningsHuracaneLanguaje,
                                            content: {
                                                bodyText: this.props.bodyText,
                                                title: this.props.title,
                                                titleText: this.props.titleText
                                            }
                                        }}
                                        onLanguageChange={(language, translated) => {
                                            this.setState({ selectedLanguage: language });
                                            this.state.translated = translated;
                                        }}
                                    />
                                }
                            </Grid.Column>
                        </Grid>
                    }
                    <div className={'WatchesWarningsHuracane__container'}>
                        <Grid columns={1} verticalAlign='middle'>
                            <Grid.Column width={16}>
                                {
                                    this.props.bodyImages.map((image, index) => {
                                        return (<Image src={image.src} size='huge' className="WatchesWarningsHuracane__container__image"
                                            key={`bodyImages__${this.props.type}__${index}`} />);
                                    })
                                }
                            </Grid.Column>
                        </Grid>
                        <Grid columns={1} verticalAlign='middle'>
                            <Grid.Column width={16}>
                                <Segment className="Segment__alert">
                                    <List >
                                        <List.Item as='a'>
                                            <List.Content>
                                                <Header size='huge'
                                                    className={_class}>{this.state.translated.title}</Header>
                                                <List.Description>
                                                    {this.state.translated.bodyText}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <Grid centered columns={2} verticalAlign='middle' className={'WatchesWarningsHuracane__buttons'}>
                        {
                            this.props.showImage &&
                            <Grid.Column floated='left' width={5}>
                                <div className="ui small image">
                                    <svg width="100" height="100">
                                        <image
                                            xlinkHref="https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg"
                                            x="0" y="0" width="100%" height="100%" />
                                    </svg>
                                </div>
                            </Grid.Column>
                        }
                        {
                            this.props.showMore &&
                            <Grid.Column floated='right' width={5}>
                                <a className="ui button More__Button" href={this.props.moreLink} target={"_blank"}>
                                    {WatchesWarningsHuracaneLanguaje[this.state.selectedLanguage].moreButton}
                                </a>
                            </Grid.Column>
                        }
                    </Grid>

                </Segment>
            </div>
        );
    }
}

WatchesWarningsHuracane.propTypes = {
    selectedLanguage: PropTypes.string,
    bodyImages: PropTypes.array,
    style: PropTypes.object,
    title: PropTypes.array,
    bodyText: PropTypes.array,
    moreLink: PropTypes.string,
    titleText: PropTypes.array,
    showHeader: PropTypes.bool
};

WatchesWarningsHuracane.defaultProps = {
    selectedLanguage: 'en',
    bodyImages: [],
    style: {},
    title: [],
    titleText: [],
    bodyText: [],
    moreLink: "#",
    showHeader: true
};

export default WatchesWarningsHuracane;
