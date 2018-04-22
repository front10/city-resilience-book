import React from 'react';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gpl from 'graphql-tag';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs/react';
import { ThemeSelector } from "../../../addons/ThemeSwitcher";
import WatchesWarningsHuracane from '../../../components/WatchesWarningsHuracane';
import Readme from '../../../components/GreenprintEmissionsReduction/readme.md';
import { client } from '../../../../storybook-utils/configs/apolloClient';

const titleText = [
    {code:"es", value: 'Advertencia de huracán'},
    {code:"en", value: 'Hurricane Warning'},
    {code:"ke", value: 'Avètisman siklòn lan'}
];

let showHeader=true,
          showTitle=true,
          showTitleIcon=true ,
          showTitleText=true , 
          showLanguageDropdown=true ,
          showImage=true,
          showMore=true; 

const stories = storiesOf('Components/Hurricane Kit/Huracane Warning', module);
stories.addDecorator(withKnobs);

stories.add('Tropical storm watch', () => {
  return (<ApolloProvider client={client}>
    <Query query={gpl`{huracaneWarning(id: "1") {
        id
        bodyText {
            code
            value
        }
        title {
            code
            value
        }
        style {
            color
            background
        }
        bodyImage{
            id
            src
        }
        }
    }`
   }>
      {({ loading, error, data }) => {
        let { huracaneWarning } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const labelShowHeader = 'Show header';
        const labelShowTitle = 'Show title';
        const labelShowTitleIcon = 'Show title icon';
        const labelShowTitleText = 'Show title text';
        const labelShowLanguageDropdown = 'Show language dropdown';
        const labelShowImage = 'Show image';
        const labelShowMore = 'Show more button';
        return (
          <ThemeSelector>
            <WatchesWarningsHuracane 
              showHeader={boolean(labelShowHeader,showHeader)}
              showTitle={boolean(labelShowTitle,showTitle)} 
              showTitleIcon={boolean(labelShowTitleIcon,showTitleIcon)}
              showTitleText={boolean(labelShowTitleText,showTitleText)} 
              icon='superpowers'
              showLanguageDropdown={showLanguageDropdown} 
              showImage={boolean(labelShowImage,showImage)} 
              showMore={boolean(labelShowMore,showMore)} 
              summary={'This component show Hurricane Warning.'} 
              titleText={titleText} 
              type={huracaneWarning.id} 
              title={huracaneWarning.title} 
              bodyImages={huracaneWarning.bodyImage} 
              bodyText={huracaneWarning.bodyText} 
              style={huracaneWarning.style} 
            />
          </ThemeSelector>
        );
      }}
    </Query>
  </ApolloProvider>);
})
.add('Tropical Storm Warning', () => {
    return (<ApolloProvider client={client}>
      <Query query={gpl`{
      huracaneWarning(id: "2") {
        id
        bodyText {
            code
            value
        }
        title {
            code
            value
        }
        style {
            color
            background
        }
        bodyImage{
            id
            src
        }
        }
     }`
     }>
        {({ loading, error, data }) => {
    let { huracaneWarning } = data;
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const labelShowHeader = 'Show header';
    const labelShowTitle = 'Show title';
    const labelShowTitleIcon = 'Show title icon';
    const labelShowTitleText = 'Show title text';
    const labelShowLanguageDropdown = 'Show language dropdown';
    const labelShowImage = 'Show image';
    const labelShowMore = 'Show more button';
    return (
      <ThemeSelector>
        <WatchesWarningsHuracane 
          showHeader={boolean(labelShowHeader,showHeader)}
          showTitle={boolean(labelShowTitle,showTitle)} 
          showTitleIcon={boolean(labelShowTitleIcon,showTitleIcon)}
          showTitleText={boolean(labelShowTitleText,showTitleText)} 
          icon='superpowers'
          showLanguageDropdown={showLanguageDropdown} 
          showImage={boolean(labelShowImage,showImage)} 
          showMore={boolean(labelShowMore,showMore)} 
          summary={'This component show Hurricane Warning.'} 
          titleText={titleText} 
          type={huracaneWarning.id} 
          title={huracaneWarning.title} 
          bodyImages={huracaneWarning.bodyImage} 
          bodyText={huracaneWarning.bodyText} 
          style={huracaneWarning.style} 
        />
      </ThemeSelector>
    );
}}
      </Query>
    </ApolloProvider>);
})
.add('Hurricane Watch', () => {
    return (<ApolloProvider client={client}>
      <Query query={gpl`{
        huracaneWarning(id: "3") {
            id
            bodyText {
                code
                value
            }
            title {
                code
                value
            }
            style {
                color
                background
            }
            bodyImage{
                id
                src
            }
        }
       }`
     }>
        {({ loading, error, data }) => {
    let { huracaneWarning } = data;
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const labelShowHeader = 'Show header';
    const labelShowTitle = 'Show title';
    const labelShowTitleIcon = 'Show title icon';
    const labelShowTitleText = 'Show title text';
    const labelShowLanguageDropdown = 'Show language dropdown';
    const labelShowImage = 'Show image';
    const labelShowMore = 'Show more button';
    return (
      <ThemeSelector>
        <WatchesWarningsHuracane 
          showHeader={boolean(labelShowHeader,showHeader)}
          showTitle={boolean(labelShowTitle,showTitle)} 
          showTitleIcon={boolean(labelShowTitleIcon,showTitleIcon)}
          showTitleText={boolean(labelShowTitleText,showTitleText)} 
          icon='superpowers'
          showLanguageDropdown={showLanguageDropdown} 
          showImage={boolean(labelShowImage,showImage)} 
          showMore={boolean(labelShowMore,showMore)} 
          summary={'This component show Hurricane Warning.'} 
          titleText={titleText} 
          type={huracaneWarning.id} 
          title={huracaneWarning.title} 
          bodyImages={huracaneWarning.bodyImage} 
          bodyText={huracaneWarning.bodyText} 
          style={huracaneWarning.style} 
        />
      </ThemeSelector>
      );
    }}
      </Query>
    </ApolloProvider>);
})
.add('Hurricane Warning', () => {
    return (<ApolloProvider client={client}>
      <Query query={gpl`{
        huracaneWarning(id: "4") {
            id
            bodyText {
                code
                value
            }
            title {
                code
                value
            }
            style {
                color
                background
            }
            bodyImage{
                id
                src
            }
        }
     }`
     }>
        {({ loading, error, data }) => {
            let { huracaneWarning } = data;
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const labelShowHeader = 'Show header';
            const labelShowTitle = 'Show title';
            const labelShowTitleIcon = 'Show title icon';
            const labelShowTitleText = 'Show title text';
            const labelShowLanguageDropdown = 'Show language dropdown';
            const labelShowImage = 'Show image';
            const labelShowMore = 'Show more button';
    return (
      <ThemeSelector>
        <WatchesWarningsHuracane 
          showHeader={boolean(labelShowHeader,showHeader)}
          showTitle={boolean(labelShowTitle,showTitle)} 
          showTitleIcon={boolean(labelShowTitleIcon,showTitleIcon)}
          showTitleText={boolean(labelShowTitleText,showTitleText)} 
          icon='superpowers'
          showLanguageDropdown={showLanguageDropdown} 
          showImage={boolean(labelShowImage,showImage)} 
          showMore={boolean(labelShowMore,showMore)} 
          summary={'This component show Hurricane Warning.'} 
          titleText={titleText} 
          type={huracaneWarning.id} 
          title={huracaneWarning.title} 
          bodyImages={huracaneWarning.bodyImage} 
          bodyText={huracaneWarning.bodyText} 
          style={huracaneWarning.style} 
        />
      </ThemeSelector>
);
}}
      </Query>
    </ApolloProvider>);
});