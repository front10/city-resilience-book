import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import StayConnectedSignLanguage from './StayConnectedSignLanguage';
import './style.scss';

class StayConnectedSign extends React.Component {
    constructor(props) {
      super(props);      
      this.state = {
        selectedLanguage: this.props.selectedLanguage,
        translated: {}
      };
      this.renderList = this.renderList.bind(this); 
      console.log(this.props)
    }

    renderList(element, i) {
        return (
          <Header as='h4' key={i}>
            <Icon name={element.icon} />
            <Header.Content>
              {this.state.translated["value_" + i]}
            </Header.Content>
          </Header>
        );
    }

    render() {
        const {showContactContainer, showContactDetail, showContactData, contactDetail, contactData, showHeader, showTitle, showTitleIcon, showTitleText, titleText, showSubtitle, subtitleText, icon, showLanguageDropdown, showSponsorIcon, showButton, toSeeMore, buttonText, sponsorIcon, selectedLanguage} = this.props;
        let translate = {
          static: StayConnectedSignLanguage,
          content: {
            titleText: titleText,
            subtitleText: subtitleText,
            contactDetail: contactDetail
          }
        };
        this.props.contactData.map((item, index) => {
          translate.content["value_" + index] = item.value;
          return item;
        });
        return(
          <div className="ui container">
            {
                showHeader &&              
                <Grid centered columns={2} verticalAlign='middle' className="Segment_Header">
                  {
                    showTitle &&
                    <Grid.Column floated='left' width={10}>
                      <Header as='h2'>            
                        {showTitleIcon && <Icon name={icon} />}
                        {
                          showTitleText &&
                          <Header.Content>
                            {this.state.translated.titleText}
                          </Header.Content>
                        }                  
                      </Header>                      
                    </Grid.Column>
                  }                  
                  {showLanguageDropdown && <Grid.Column floated='right' width={5}>
                    <LanguageSwitcher
                      floated='right'
                      translate={translate}
                      onLanguageChange={(language, translated) => {
                        this.setState({ selectedLanguage: language });
                        this.setState({translated: translated});
                      }}
                    />
                  </Grid.Column>}
                </Grid>                            
            }
            {showSubtitle && <h4>{this.state.translated.subtitleText}</h4>}
            {
                showContactContainer &&
                <Grid divided='vertically'>
                  {
                      showContactDetail &&
                      <Grid.Column floated='left' width={8}>
                        <p>{this.state.translated.contactDetail}</p>
                      </Grid.Column>
                  }
                  {
                      showContactData &&
                      <Grid.Column floated='right' width={8}>
                        {
                            contactData && contactData.map(this.renderList)
                        }
                      </Grid.Column>
                  }                  
                </Grid>
            }
            {
                ( showSponsorIcon || showButton ) &&
                <Grid centered columns={2} verticalAlign='middle'>
                  {
                    showSponsorIcon &&
                    <Grid.Column floated='left' width={5}>
                      <div className="ui small image">
                        <svg width="100" height="100">
                          <image xlinkHref={sponsorIcon} x="0" y="0" width="100%" height="100%" />
                        </svg>
                      </div>
                    </Grid.Column>
                }
                  {
                    showButton &&
                    <Grid.Column floated='right' width={5}>
                      <a href={toSeeMore} className="ui button">{this.state.translated.button}</a>
                    </Grid.Column>
                }              
                </Grid>
            }
          </div>
        );
    }
}

StayConnectedSign.propTypes = {
    contactDetail: PropTypes.array, 
    contactData: PropTypes.array,
    titleText: PropTypes.array,
    subtitleText: PropTypes.array,
    selectedLanguage: PropTypes.string,
    icon: PropTypes.string,
    sponsorIcon: PropTypes.string,
    toSeeMore: PropTypes.string,
    buttonText: PropTypes.string,
    showHeader: PropTypes.bool,
    showTitle: PropTypes.bool,
    showTitleIcon: PropTypes.bool,
    showTitleText: PropTypes.bool,    
    showSubtitle: PropTypes.bool,    
    showLanguageDropdown: PropTypes.bool,
    showSponsorIcon: PropTypes.bool,
    showButton: PropTypes.bool,    
    showContactContainer: PropTypes.bool, 
    showContactDetail: PropTypes.bool, 
    showContactData: PropTypes.bool,    
}

StayConnectedSign.defaultProps = {
    contactDetail: [], 
    contactData: [],
    titleText: [],
    subtitleText: [],
    selectedLanguage: "en",
    icon: "checked calendar",
    sponsorIcon: "https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg",
    toSeeMore: "http://www.miamidade.gov/emergency/",
    buttonText: "See more",
    showContactContainer: true, 
    showContactDetail: true, 
    showContactData: true,    
    showHeader: true,
    showTitle: true,
    showTitleIcon: true,
    showTitleText: true,    
    showSubtitle: true,    
    showLanguageDropdown: true,
    showSponsorIcon: true,
    showButton: true,    
}

export default StayConnectedSign;