import MongoDBManager from '../util/MongoDBManager';
const mongodbManager = MongoDBManager.getInstance();
const POST_COLLECTION = 'post';
class PostDAO {

  static getPost(key) {
    return mongodbManager.findone(this._postCollection,key);
  }

  static getPosts(key) {
    return mongodbManager.findmany(this._postCollection,key);
  }

  static createPost(post) {
    return mongodbManager.insertone(this._postCollection, post);
  }
}

export default PostDAO;








