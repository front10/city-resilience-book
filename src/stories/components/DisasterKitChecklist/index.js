import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs/react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { client } from '../../../../storybook-utils/configs/apolloClient';
import DisasterKitChecklist from '../../../components/DisasterKitChecklist';
import Readme from '../../../components/DisasterKitChecklist/readme.md';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";

const GET_DISASTERSKIT = gpl`{
    getAllDisasterKit{
      id
      name{
        code
        value
      }
    }
  }`;

const titleText = [
  {code:"es", value: 'Lista de verificación del kit de desastre'},
  {code:"en", value: 'Disaster Kit Checklist'},
  {code:"ke", value: 'Lis Twous Dezas'}
];

const textFooter = [
  {code:"es", value: "Esta es una lista básica de artículos de emergencia. No olvide traer suministros médicos específicos para usted, su familia o mascotas. Ver la página anterior para recursos adicionales."},
  {code:"en", value: "This is a basic list of emergency items. Don't forget to bring any specific medical supplies for you, your family or pets. See the previous page for additional resources."},
  {code:"ke", value: "Sa a se yon lis debaz nan atik ijans. Pa bliye pote nenpòt materyèl espesifik medikal pou ou, fanmi ou oswa bèt kay. Gade paj anvan an pou resous adisyonèl"}
];

const stories = storiesOf('Components/Hurricane Kit/Disaster kit checklist Component', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => {
    return (<ApolloProvider client={client}>
      <Query query={GET_DISASTERSKIT}>
        {({ loading, error, data }) => {
        const { getAllDisasterKit } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        
        const selectedLanguageDefault = "en";
        const labelShowHeader = 'Show Header';
        const showHeaderDefault = true;
        const labelShowTitle = 'Show Title';
        const showTitleDefault = true;
        const labelShowTitleIcon = 'Show Title Icon';
        const showTitleIconDefault = true;
        const labelShowTitleText = 'Show Title Text';
        const showTitleTextDefault = true;
        const iconDefault = "checked calendar";
        const labelShowLanguageDropdown = 'Show Language Dropdown';
        const showLanguageDropdownDefault = true;
        const labelShowCheckList = 'Show Checklist';
        const showCheckListDefault = true;
        const labelShowSponsorIcon = 'Show Sponsor Icon';
        const showSponsorIconDefault = true;
        const labelShowButton = 'Show button';
        const showButtonDefault = true;
        const labelShowFooterText = 'Show footer text';
        const showFooterTextDefault = true;
        const sponsorIconDefault = "https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg";
        const toSeeMoreDefault = "http://www.miamidade.gov/emergency/";
        const buttonTextDefault = "See more";
        return (
          <ThemeSelector>
            <DisasterKitChecklist 
              source={Readme}
              checkList={getAllDisasterKit}
              selectedLanguage={selectedLanguageDefault}
              showHeader={boolean(labelShowHeader,showHeaderDefault)}
              showTitle={boolean(labelShowTitle,showTitleDefault)}
              showTitleIcon={boolean(labelShowTitleIcon,showTitleIconDefault)}
              showTitleText={boolean(labelShowTitleText,showTitleTextDefault)}
              titleText={titleText}
              icon={iconDefault}
              showLanguageDropdown={boolean(labelShowLanguageDropdown,showLanguageDropdownDefault)}
              showCheckList={boolean(labelShowCheckList,showCheckListDefault)}
              showSponsorIcon={boolean(labelShowSponsorIcon,showSponsorIconDefault)}
              showButton={boolean(labelShowButton,showButtonDefault)}
              showFooterText={boolean(labelShowFooterText,showFooterTextDefault)}
              textFooter={textFooter}
              sponsorIcon={sponsorIconDefault}
              toSeeMore={toSeeMoreDefault}
              buttonText={buttonTextDefault}
            />
          </ThemeSelector>
        );
      }}
      </Query>
    </ApolloProvider>);
  });