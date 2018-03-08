import React from 'react';
import PropTypes from 'prop-types';
import './post.css';

const propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

class Post extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props.post;

    return (
      <div className='post-container'>
        <div>{title}</div>
      </div>
    );

  }
}

Post.propTypes = propTypes;

export default Post;