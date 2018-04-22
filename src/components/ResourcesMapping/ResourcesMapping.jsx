import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Segment, Input, Message, Grid, Header, Button, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import ResourcesMappingLanguaje from './ResourcesMappingLanguaje';
import './style.scss';

import 'font-awesome/css/font-awesome.min.css';

const Client = ({ color }) => <h1 style={{ color }}><i className="fa fa-map-marker fa-2x" /></h1>
const Marker = ({ color = 'green', icon = 'fa-map-marker' }) => <h1 style={{ color }}><i className={`fa ${icon} fa-1x`} /></h1>
const paintMarker = (item, i) => {
  const { location } = item.geometry;
  return (<Marker
    key={i}
    lat={location.lat}
    lng={location.lng}
    color={item.color}
    icon={item.faIcon}
  />)
}
const paintButtons = (item, i) => {
  return (<Button basic key={i} animated='vertical' types={"store"}>
    <Button.Content hidden>Shop</Button.Content>
    <Button.Content visible>
      <i className={`fa ${item.faIcon} fa-1x`} />
    </Button.Content>
  </Button>)
}



export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcesList: this.props.resourcesList,
      selectedLanguage: this.props.selectedLanguage,
      selectedFilter: 'market'
    }
    this.filter = this.filter.bind(this);
    this.paintButtons = this.paintButtons.bind(this);
  }

  filter(event, data) {
    const { types } = data;
    let resourcesList = [...this.props.resourcesList];
    let resourcesListFiltered = resourcesList.filter(item => {
      const a = (item.types === types) ? item : null
      return a;
    });
    this.setState({
      resourcesList: resourcesListFiltered
    })
  }
  paintButtons(item, i) {
    return (<Button basic color='grey' key={i} animated='vertical' onClick={this.filter} types={item.types}>
      <Button.Content basic color='grey' hidden>{item.value}</Button.Content>
      <Button.Content basic color='grey' visible>
        <i className={`fa ${item.faIcon} fa-1x`} />
      </Button.Content>
    </Button>)
  }
  render() {
    const { center, listButtons, showHeader, showTitle, showTitleIcon, showLanguageDropdown, showLocationSearch, icon, toSeeMore } = this.props;
    const { resourcesList } = this.state;
    const style = {
      width: '100 %',
      height: '100 %'
    }
    return (<Segment.Group className="resourcesMappping">
      {showHeader && <Segment className="resourcesMappping__header Segment_Header">
        <Grid stackable columns={2} verticalAlign='middle'>
          {showTitle && <Grid.Column>
            {/* <Header
              as='h2'
              image={icon}
              content={ResourcesMappingLanguaje[this.state.selectedLanguage].mapTittle}
            /> */}
            <Header as='h2' className="resourcesMappping__header__title">
              <Icon name='superpowers' />
              <Header.Content>
                {ResourcesMappingLanguaje[this.state.selectedLanguage].mapTittle}
              </Header.Content>
            </Header>
          </Grid.Column>}
          {showLanguageDropdown && <Grid.Column>
            <LanguageSwitcher 
              floated='right'
              onLanguageChange={(language) => {
                this.setState({ selectedLanguage: language });
              }}
            />
          </Grid.Column>}
        </Grid>
      </Segment>}
      {showLocationSearch && <Segment>
        <Grid stackable columns={2} verticalAlign='middle'>
          <Grid.Column floated='left' >
            {/* <Input icon='search' fluid placeholder='Search...' /> */}
          </Grid.Column>
          <Grid.Column floated='right'>
            <Button.Group fluid>
              {
                listButtons.map(this.paintButtons)
              }
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Segment>}
      <Segment className="resourcesMappping__segment">
        <div className='google-map resourcesMappping__segment__mapContainer'>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Client
              lat={center.lat}
              lng={center.lng}
            />
            {
              resourcesList.map(paintMarker)
            }
          </GoogleMapReact>
        </div>
      </Segment>
      <Segment>
        {/* <Message>
          <Message.Header>
            Changes in Service
          </Message.Header>
          <p>
            {ResourcesMappingLanguaje[this.state.selectedLanguage].mapDetail}
          </p>
        </Message> */}
        <Grid stackable columns={1} verticalAlign='middle'>
          <Grid.Column floated='left'>
            <Image src='https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg' size='small' />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group >)
  }
}



Map.propTypes = {
  resourcesList: PropTypes.array,
  listButtons: PropTypes.array,
  center: PropTypes.object,
};

Map.defaultProps = {
  listButtons: [],
  resourcesList: [],
  center: {},
  zoom: 13,
  selectedLanguage: 'en',
  showHeader: true,
  showTitle: true,
  showTitleIcon: true,
  showTitleText: true,
  titleText: "Find resources",
  icon: "images/icons/hurricane.png",
  showLanguageDropdown: true,
  showLocationSearch: true,
  toSeeMore: "http://www.miamidade.gov/emergency/"
};
