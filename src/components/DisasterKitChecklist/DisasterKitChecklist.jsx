import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import DisasterKitChecklistLanguage from './DisasterKitChecklistLanguage';
import './style.scss';

class DisasterKitChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: this.props.selectedLanguage,
      translated: {}
    };
    this.renderList = this.renderList.bind(this);
  }

  renderList(element, i) {
    return (
      <div key={element.id} className="checklist__item item ui checkbox">
        <input type="checkbox" name="checklist" />
        <label className="checklist__item__label">{this.state.translated["value_" + i]}</label>
      </div>
    );
  }

  render() {
    const { showHeader, showTitle, showTitleIcon, showTitleText, titleText, icon, showLanguageDropdown, showCheckList, showSponsorIcon, showButton, showFooterText, toSeeMore, buttonText, textFooter, sponsorIcon, selectedLanguage, checkList } = this.props;
    let translate = {
      static: DisasterKitChecklistLanguage,
      content: {
        titleText: titleText,
        textFooter: textFooter
      }
    };
    this.props.checkList.map((item, index) => {
      translate.content["value_" + index] = item.name;
      return item;
    });
    return (
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
        {
          showCheckList &&
          <div className="ui list">
            {
              checkList && checkList.map(this.renderList)
            }
          </div>
        }
        {
          (showSponsorIcon || showButton) &&
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
              <Grid.Column floated='right' width={5} className="see-more-button-wrapper">
                <a href={toSeeMore} className="ui button">{this.state.translated.button}</a>
              </Grid.Column>
            }
          </Grid>
        }
        {showFooterText && <p className="disclaimer" > {this.state.translated.textFooter}</p>}
      </div>
    );
  }
}

DisasterKitChecklist.propTypes = {
  checkList: PropTypes.array,
  selectedLanguage: PropTypes.string,
  showHeader: PropTypes.bool,
  showTitle: PropTypes.bool,
  showTitleIcon: PropTypes.bool,
  showTitleText: PropTypes.bool,
  titleText: PropTypes.array,
  icon: PropTypes.string,
  showLanguageDropdown: PropTypes.bool,
  showCheckList: PropTypes.bool,
  showSponsorIcon: PropTypes.bool,
  showButton: PropTypes.bool,
  showFooterText: PropTypes.bool,
  textFooter: PropTypes.array,
  sponsorIcon: PropTypes.string,
  toSeeMore: PropTypes.string,
  buttonText: PropTypes.string
};

DisasterKitChecklist.defaultProps = {
  checkList: [],
  selectedLanguage: "en",
  showHeader: true,
  showTitle: true,
  showTitleIcon: true,
  showTitleText: true,
  titleText: [],
  icon: "checked calendar",
  showLanguageDropdown: true,
  showCheckList: true,
  showSponsorIcon: true,
  showButton: true,
  showFooterText: true,
  textFooter: [],
  sponsorIcon: "https://res.cloudinary.com/front10/image/upload/t_media_lib_thumb/v1524326358/resilient-city/miami-dade_color.jpg",
  toSeeMore: "http://www.miamidade.gov/emergency/",
  buttonText: "See more"
};

export default DisasterKitChecklist;