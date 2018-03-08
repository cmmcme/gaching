import MongoDBManager from '../util/MongoDBManager';
import { ObjectID } from 'mongodb';
const mongodbManager = MongoDBManager.getInstance();
const POST_COLLECTION = 'post';
class PostDAO {

  static getPost(postId) {
    return mongodbManager.findone(POST_COLLECTION, { _id: ObjectID(postId) });
  }

  static getPosts() {
    return mongodbManager.findmany(POST_COLLECTION);
  }

  static createPost(post) {
    return mongodbManager.insertone(POST_COLLECTION, post);
  }
}

export default PostDAO;








