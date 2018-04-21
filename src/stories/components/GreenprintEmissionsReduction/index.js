import React from 'react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { storiesOf } from '@storybook/react';
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


storiesOf('Components/Charts', module).add('Greenprint emissions reduction', () => {
  return (<ApolloProvider client={client}>
    <Query query={GET_EMISSIONS}>
      {({ loading, error, data }) => {
        const { getAllemissionsReduction } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <ThemeSelector>
            <GreenprintEmissionsReduction selectedLanguage='en' source={Readme} data={getAllemissionsReduction} />
          </ThemeSelector>
        );
      }}
    </Query>
  </ApolloProvider>);
});
