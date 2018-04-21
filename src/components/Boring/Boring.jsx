import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Boring extends React.Component {
  render() {
    return <div className="boring-component">{this.props.content}</div>;
  }
}

Boring.propTypes = {
  content: PropTypes.string,
};

Boring.defaultProps = {
  content: 'Boring',
};

export default Boring;
