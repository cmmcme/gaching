import React from 'react';
import Post from './components/post';

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
    this.setState({
      posts: [
        {
          title: 'first document',
        },
      ],
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
    );
  }
}

export default Drive;