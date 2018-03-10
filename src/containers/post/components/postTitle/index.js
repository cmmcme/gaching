import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

const propTypes = {
  ...withStylesPropTypes,
  title: PropTypes.string.isRequired,
};

class PostTitle extends React.Component {

  render() {
    const { styles, title } = this.props;

    return (
      <div {...css(
        styles.Post__title,
      )}
      >
        {title}
      </div>
    );
  }
}

PostTitle.propTypes = propTypes;

export default withStyles(({ gaching: { color } }) => ({

  Post__title: {
    fontSize: '30px',
  }
})) (PostTitle);