import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

const propTypes = {
  ...withStylesPropTypes,
  title: PropTypes.string,
};

const defaultProps = {
  title: 'new document',
};

class DrivePost extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { styles } = this.props;

    const { title } = this.props.post;

    console.log(styles);

    return (
      <div {...css(styles.DrivePost)}>
        <div {...css(styles.DrivePost__title)}>{title}</div>
      </div>
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
    // backgroundColor: color.core.primary,
    border: '1px solid black',
    margin: '8px',
    boxShadow: '5px 5px 5px 0 lightgray',
  },

  DrivePost__title: {
    textAlign: 'center',
    fontWeight: 700,
  }

})) (DrivePost);
