import React from 'react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { storiesOf } from '@storybook/react';
import DoctorList from '../../../components/DoctorList';
import Readme from '../../../components/DoctorList/readme.md';
import { client } from '../../../../storybook-utils/configs/apolloClient';

const GET_DOCTORS = gpl`{
    getAllDoctors {
        id
        firstName
        lastName
        title
        rating
        age
      }
    }`;

storiesOf('Components/Doctor-list', module).add('Default', () => {
  return (<ApolloProvider client={client}>
    <Query query={GET_DOCTORS}>
      {({ loading, error, data }) => {
        const { getAllDoctors } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <DoctorList doctorList={getAllDoctors} />
        );
      }}
    </Query>
  </ApolloProvider>);
});

// const testData = ['hola', '123'];
// storiesOf('Components/Doctor-list', module).add('Default', () => {
//     return <DoctorList doctorList={testData} />;
// });
