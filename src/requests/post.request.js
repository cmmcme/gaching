import axios from 'axios';

const PATH = '/api/post';

class PostRequest {

  static getPosts() {
    return axios.get(`${PATH}/list`)
      .then(response => response.data);
  }
}

export default PostRequest;