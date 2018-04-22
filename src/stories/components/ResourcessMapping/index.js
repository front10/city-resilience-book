import React from 'react';
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs/react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { storiesOf } from '@storybook/react';
import ResourcesMapping from '../../../components/ResourcesMapping';
import Readme from '../../../components/ResourcesMapping/readme.md';
import { client } from '../../../../storybook-utils/configs/apolloClient';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";

const GET_RESOURCESS = gpl`{
  getResourcesFromGoogle(lat: 25.803696, lng: -80.210214, ltype:["market","airport","hospital","store","gas_station"]) {
    id
    name
    icon
    color
    faIcon
    types
    geometry {
      location {
        lat
        lng
      }
    }
  }
}`;

const props = {
  listButtons: [
    {
      faIcon: "fa-shopping-cart",
      value: "Food",
      types: "market"
    },
    {
      faIcon: "fa-plane",
      value: "Airport",
      types: "airport"
    },
    {
      faIcon: "fa-h-square",
      value: "Hospital",
      types: "hospital"
    },
    {
      faIcon: "fa-shopping-basket",
      value: "Store",
      types: "store"
    },
    {
      faIcon: "fa-car",
      value: "Gas",
      types: "gas_station"
    },],
  resourcesList: [],
  center: { lat: 25.803696, lng: -80.210214 },
  zoom: 13,
  selectedLanguage: 'en',
  showHeader: true,
  showTitle: true,
  showTitleIcon: true,
  showTitleText: true,
  titleText: "Find resources",
  icon: "hurricane",
  showLanguageDropdown: true,
  showLocationSearch: true,
}

const stories = storiesOf('Components/Hurricane Kit/Resources Mapping', module);

stories.addDecorator(withKnobs);
stories.add('Default', () => {

  return (<ApolloProvider client={client}>
    <Query query={GET_RESOURCESS}>
      {({ loading, error, data }) => {
        const { getResourcesFromGoogle } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <ThemeSelector>
            <ResourcesMapping 
              resourcesList={getResourcesFromGoogle} 
              center={props.center} 
              zoom={props.zoom}
              selectedLanguage={props.selectedLanguage}
              showHeader={boolean('Show Header',props.showHeader)}
              showTitle={boolean('Show Title',props.showTitle)}
              showLanguageDropdown={boolean('Show Language Dropdown',props.showLanguageDropdown)}
              showTitleIcon={props.showTitleIcon}
              showTitleText={props.showTitleText}
              listButtons={props.listButtons}
            />
          </ThemeSelector>
        );
      }}
    </Query>
  </ApolloProvider>);
});

// storiesOf('Components/Resources Mapping', module).add('Default', () => {
//   return (<ResourcesMapping/>);
// });
