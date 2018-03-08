import React from 'react';
// import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import PostRequest from '../../requests/post.request';
import DrivePost from './components/drivePost';

// const propTypes = {
//   ...withStylesPropTypes,
// };

class Drive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    this.fetchPostList();
  }

  fetchPostList() {
    PostRequest.getPosts()
      .then(posts => {
        this.setState({
          posts,
        });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((post, index) => (
          <DrivePost key={index} post={post}/>
        ))}
      </div>
    );
  }
}

export default Drive;

// export { Drive as PureDrive };
//
// export default withStyles(({ reactDates: { color, font } }) => ({
// }))(Drive);