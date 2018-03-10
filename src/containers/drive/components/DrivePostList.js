import React from 'react';
import PropTypes from 'prop-types';
import PostShape from '../../../shapes/post.shape';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import DrivePost from './DrivePost';

const propTypes = {
  ...withStylesPropTypes,
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

class DrivePostList extends React.Component {

  render() {
    const { posts } = this.props;

    css();

    return (
      <div>
        {posts.map((post, index) => (
          <DrivePost
            key={index}
            to={`post/${post._id}`}
            postId={post._id}
            title={post.title}
          />
        ))}
      </div>
    );
  }
}

DrivePostList.propTypes = propTypes;

export default withStyles(({ gaching: { color } }) => ({

  Post__title: {
    fontSize: '30px',
  }
})) (DrivePostList);