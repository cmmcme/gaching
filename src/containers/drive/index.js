import React from 'react';
import PostRequest from '../../requests/post.request';
import DrivePostList from './components/DrivePostList';
import ButtonNewPost from './components/ButtonNewPost';

class Drive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.fetchPostList = this.fetchPostList.bind(this);
    this.createNewPost = this.createNewPost.bind(this);
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

  createNewPost(post) {
    PostRequest.addPost(post)
      .then(this.fetchPostList)
      .catch(err => console.error(err));
  }

  // deletePost(postId) {
  //   PostRequest.deletePost(postId)
  //     .then(this.fetchPostList)
  //     .catch(err => console.error(err));
  // }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <ButtonNewPost onClick={this.createNewPost}/>

        <DrivePostList posts={posts}/>
      </div>
    );
  }
}

export default Drive;

// export { Drive as PureDrive };
//
// export default withStyles(({ reactDates: { color, font } }) => ({
// }))(Drive);