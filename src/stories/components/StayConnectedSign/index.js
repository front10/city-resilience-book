import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs/react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { client } from '../../../../storybook-utils/configs/apolloClient';
import StayConnectedSign from '../../../components/StayConnectedSign';
import Readme from '../../../components/StayConnectedSign/readme.md';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";

const GET_STAYCONNECTEDSIGN = gpl`{
    getAllContact{
        icon
        value{
          code
          value
        }
    }
  }`;

const titleText = [
  {code:"es", value: 'Mantente conectado'},
  {code:"en", value: 'Stay connected'},
  {code:"ke", value: 'Rete konekte'}
];
const contactDetail = [
  {code:"es", value: "El Centro de Contacto 311 del Condado de Miami-Dade lo ayuda a mantenerse conectado a medida que se acerca una tormenta tropical o un huracán, y también brinda información importante sobre el servicio después de la tormenta."},
  {code:"en", value: "Miami-Dade County's 311 Contact Center helps you stay connected as a tropical storm or hurricane approaches, and also provides important service information after the storm"},
  {code:"ke", value: "311 Contact Center Miami-Dade County ede ou rete konekte kòm yon tanpèt twopikal oswa siklòn apwòch, epi tou li bay enfòmasyon enpòtan sèvis apre tanpèt la"}
];
const subtitleText = [
  {code:"es", value: 'Antes, durante y después de una tormenta'},
  {code:"en", value: 'Before, during and after a storm'},
  {code:"ke", value: 'Anvan, pandan ak apre yon tanpèt'}
]; 

const stories = storiesOf('Components/Hurricane Kit/Stay Connected Component', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => {
    return (<ApolloProvider client={client}>
      <Query query={GET_STAYCONNECTEDSIGN}>
        {({ loading, error, data }) => {
        const { getAllContact } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        console.log(data);
        const selectedLanguageDefault = "en";
        const labelShowHeader = 'Show Header';
        const showHeaderDefault = true;
        const labelShowTitle = 'Show Title';
        const showTitleDefault = true;
        const labelShowTitleIcon = 'Show Title Icon';
        const showTitleIconDefault = true;
        const labelShowTitleText = 'Show Title Text';
        const showTitleTextDefault = true;
        const iconDefault = "superpowers";
        const labelShowLanguageDropdown = 'Show Language Dropdown';
        const showLanguageDropdownDefault = true;
        const labelShowContactData = 'Show Contact Data';
        const showContactDataDefault = true;
        const labelShowSponsorIcon = 'Show Sponsor Icon';
        const showSponsorIconDefault = true;
        const labelShowButton = 'Show button';
        const showButtonDefault = true;
        const sponsorIconDefault = "https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg";
        const toSeeMoreDefault = "http://www.miamidade.gov/emergency/";
        const buttonTextDefault = "See more";
        const labelShowContactContainer = 'Show Contact container';
        const showContactContainerDefault = true;
        const labelShowContactDetail = 'Show Contact detail'; 
        const showContactDetailDefault = true;
        return (
          <ThemeSelector>
            <StayConnectedSign 
              source={Readme}
              contactData={getAllContact}
              titleText={titleText}
              contactDetail={contactDetail}
              subtitleText={subtitleText}
              selectedLanguage={selectedLanguageDefault}
              icon={iconDefault}
              sponsorIcon={sponsorIconDefault}
              toSeeMore={toSeeMoreDefault}
              buttonText={buttonTextDefault}
              showHeader={boolean(labelShowHeader,showHeaderDefault)}
              showTitle={boolean(labelShowTitle,showTitleDefault)}
              showTitleIcon={boolean(labelShowTitleIcon,showTitleIconDefault)}
              showTitleText={boolean(labelShowTitleText,showTitleTextDefault)}              
              showLanguageDropdown={boolean(labelShowLanguageDropdown,showLanguageDropdownDefault)}
              showSponsorIcon={boolean(labelShowSponsorIcon,showSponsorIconDefault)}
              showButton={boolean(labelShowButton,showButtonDefault)}              
              showContactContainer={boolean(labelShowContactContainer,showContactContainerDefault)}
              showContactDetail={boolean(labelShowContactDetail,showContactDetailDefault)} 
              showContactData={boolean(labelShowContactData,showContactDataDefault)}              
            />
          </ThemeSelector>
        );
      }}
      </Query>
    </ApolloProvider>);
  });