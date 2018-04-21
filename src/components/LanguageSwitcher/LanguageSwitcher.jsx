import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import './style.scss';


class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { text: 'English', key: 'en', value: 'en' },
        { text: 'Spanish', key: 'es', value: 'es' },
        { text: 'Haitian Creole', key: 'ha', value: 'ht' },
      ]
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Select
        selection
        search
        fluid
        placeholder='Select your country'
        options={this.state.languages}
        onChange={this.onChange} />
    );
  }

  onChange(event, data){
    this.props.onLanguageChange(data.value);
  }
}

export default LanguageSwitcher;
