import axios from 'axios';

const PATH = '/api/post';

class PostRequest {

  static getPosts() {
    return axios.get(`${PATH}/list`)
      .then(response => response.data);
  }

  static getPost(postId) {
    return axios.get(`${PATH}/${postId}`)
      .then(response => response.data);
  }

  static addPost(post) {
    return axios.post(`${PATH}`, post)
      .then(response => response.data);
  }

  static deletePost(postId) {
    return axios.delete(`${PATH}/${postId}`)
      .then(response => response.data);
  }
}

export default PostRequest;