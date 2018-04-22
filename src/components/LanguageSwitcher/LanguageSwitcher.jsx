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
        { text: 'Haitian Creole', key: 'ke', value: 'ke' },
      ],
      value: this.props.value,
      translate: this.props.translate
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.onChange({}, { value: this.state.value });
  }

  onChange(event, data) {
    let translated = {};
    if (this.props.translate.static)
      translated = this.props.translate.static[data.value];
    if (this.props.translate.content) {
      translated.content = {};
      for (let index in this.props.translate.content) {
        let item = this.props.translate.content[index];
        item.map(language => {
          if (language.code === data.value)
            translated[index] = language.value;
        })
      }
    }
    this.setState({ value: data.value });
    this.props.onLanguageChange(data.value, translated);
  }

  render() {
    return (
      <Select
        selection
        search
        fluid
        placeholder='Language'
        options={this.state.languages}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}

LanguageSwitcher.propTypes = {
  value: PropTypes.string,
  onLanguageChange: PropTypes.func,
  translate: PropTypes.object
};

LanguageSwitcher.defaultProps = {
  value: 'en',
  translate: {},
  onLanguageChange: () => {
  }
};

export default LanguageSwitcher;
