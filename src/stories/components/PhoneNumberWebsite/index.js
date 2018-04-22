import React from 'react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { storiesOf } from '@storybook/react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";
import PhoneNumberWebsite from '../../../components/PhoneNumberWebsite';
import Readme from '../../../components/PhoneNumberWebsite/readme.md';
import { client } from '../../../../storybook-utils/configs/apolloClient';

const GET_PHONEWEPSITE = gpl`{
    getAllPhoneWebsite {
        id
        name {
          code
          value
        }
        value {
          code
          value
        }
        phone
        tty
        url
      }
  }`;

storiesOf('Components/Hurricane Kit/Phone Number Website', module).add('Default', () => {
    return (<ApolloProvider client={client}>
        <Query query={GET_PHONEWEPSITE}>
            {({ loading, error, data }) => {
                const { getAllPhoneWebsite } = data;
                console.log('getAllPhoneWebsite', getAllPhoneWebsite);
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                return (<ThemeSelector>
                    <PhoneNumberWebsite resourcess={getAllPhoneWebsite} />
                </ThemeSelector>
                );
            }}
        </Query>
    </ApolloProvider>);
});
