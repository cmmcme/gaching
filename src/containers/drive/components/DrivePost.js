import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { Link } from 'react-router-dom';

const propTypes = {
  ...withStylesPropTypes,
  to: PropTypes.string.isRequired,
  postId: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  postId: '',
  title: 'new document',
};

class DrivePost extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { styles, to, title } = this.props;

    return (
      <Link to={to} {...css(styles.DrivePost)}>
        <div {...css(styles.DrivePost__header)}>
          <span {...css(styles.DrivePost__title)}>{title}</span>
        </div>
      </Link>
    );

  }
}

DrivePost.propTypes = propTypes;
DrivePost.defaultProps = defaultProps;

export { DrivePost as PureDrivePost };

export default withStyles(({ gaching: { color } }) => ({
  DrivePost: {
    position: 'relative',
    display: 'inline-block',
    width: '180px',
    height: '200px',
    border: '1px solid black',
    margin: '8px',
    boxShadow: '3px 3px 3px 0 lightgray',
    lineHeight: '1',

    ':hover': {
      boxShadow: '5px 5px 5px 3px lightgray',
    },
  },

  DrivePost__header: {
    display: 'inline-block',
    width: '100%',
    height: '30px',
    textAlign: 'center',
    borderBottom: `1px solid ${color.core.pDark}`,
    backgroundColor: color.core.primary,
  },

  DrivePost__title: {
    height: '100%',
    lineHeight: '30px',
    fontWeight: 700,
  }

})) (DrivePost);
