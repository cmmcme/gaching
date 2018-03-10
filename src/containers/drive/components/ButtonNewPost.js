import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

const propTypes = {
  ...withStylesPropTypes,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick() {},
};

class ButtonNewPost extends React.Component {

  onClick() {
    const { onClick } = this.props;
    onClick({ title: 'new post', description: '' });
  }

  render() {
    const { styles } = this.props;

    return (
      <button {...css(styles.ButtonNewPost)} onClick={(e) => this.onClick(e)}>
        new post
      </button>
    );
  }
}

ButtonNewPost.propTypes = propTypes;
ButtonNewPost.defaultProps = defaultProps;

export default withStyles(({ gaching: { color } }) => ({

  ButtonNewPost: {
    fontSize: '15px',
    backgroundColor: color.primary,
  }
})) (ButtonNewPost);