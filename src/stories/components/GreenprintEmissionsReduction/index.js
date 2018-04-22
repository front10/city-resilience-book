import React from 'react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs/react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";
import GreenprintEmissionsReduction from '../../../components/GreenprintEmissionsReduction';
import Readme from '../../../components/GreenprintEmissionsReduction/readme.md';
import { client } from '../../../../storybook-utils/configs/apolloClient';

const GET_EMISSIONS = gpl`{
  getAllemissionsReduction {
    name
    value
  }
}`;

const stories = storiesOf('Components/Resilience City Campaign/Greenprint Emissions Reduction Component', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
  return (<ApolloProvider client={client}>
    <Query query={GET_EMISSIONS}>
      {({ loading, error, data }) => {
        const { getAllemissionsReduction } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const labelShowLanguageDropdown = 'Show Language Dropdown';
        const showLanguageDropdownDefault = true;
        return (
          <ThemeSelector>
            <GreenprintEmissionsReduction 
              showLanguageDropdown={boolean(labelShowLanguageDropdown,showLanguageDropdownDefault)}
              selectedLanguage='en' 
              source={Readme} 
              data={getAllemissionsReduction} 
            />
          </ThemeSelector>
        );
      }}
    </Query>
  </ApolloProvider>);
});
