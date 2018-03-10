import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

const propTypes = {
  ...withStylesPropTypes,
  description: PropTypes.string.isRequired,
};

class PostContent extends React.Component {

  render() {
    const { styles, description } = this.props;

    return (
      <div {...css(
        styles.Post__content,
      )}
      >
        {description}
      </div>
    );
  }
}

PostContent.propTypes = propTypes;

export default withStyles(({ gaching: { color } }) => ({

  Post__content: {
    fontSize: '10px',
  }
})) (PostContent);