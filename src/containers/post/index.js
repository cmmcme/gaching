import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import PostRequest from '../../requests/post.request';
import PostTitle from './components/postTitle';
import PostContent from './components/postContent';

const propTypes = {
  ...withStylesPropTypes,
  match: PropTypes.object.isRequired,
};

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: '',
        description: '',
      },
    };
  }

  componentWillMount() {
    const { match } = this.props;
    this.fetchPost(match.params.postId);
  }

  fetchPost(postId) {
    PostRequest.getPost(postId)
      .then(post => {
        this.setState({
          post,
        });
      });
  }

  render() {
    const { styles } = this.props;

    const { post } = this.state;

    return (
      <div {...css(styles.Post)}>
        <PostTitle
          title={post.title}
        />

        <PostContent
          description={post.description}
        />
      </div>
    );
  }
}

Post.propTypes = propTypes;

export default withStyles(({ gaching: { color } }) => ({
  Post: {

  }
})) (Post);