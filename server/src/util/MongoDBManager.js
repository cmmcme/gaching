import { MongoClient } from 'mongodb';

const address = 'localhost';
const port = '27017';
const dbname = 'gaching';

const mongoUrl = `mongodb://${address}:${port}/${dbname}`;

let instance = null;
class MongoDBManager {
  static getInstance() {
    if (!instance) {
      instance = new MongoDBManager();
    }

    return instance;
  }

  constructor() {
    if (!instance) {
      MongoClient.connect(mongoUrl, (err, db) => {
        if (err) {
          throw Error('CONNECTION REFUSED: ' + mongoUrl);
        } else {
          console.log(`connect to '${mongoUrl}'`);
          this._db = db;
        }
      });
      instance = this;
    }
    return instance;
  }

  insertone(col) {
    const args = Array.prototype.slice.call(arguments, 1);
    return new Promise((resolve, reject) => {
      this._db.collection(col, (err, coll) => {
        if(err) {
          reject(err);
        } else {
          coll.insertOne(...args, (err, result) => {
            if(err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }

  findone(col) {
    const args = Array.prototype.slice.call(arguments, 1);
    return new Promise((resolve, reject) => {
      this._db.collection(col, (err, coll) => {
        if(err) {
          reject(err);
        } else {
          coll.findOne(...args, (err, doc) => {
            if(err) {
              reject(err);
            } else {
              resolve(doc);
            }
          });
        }
      });
    });
  }

  findmany(col) {
    const args = Array.prototype.slice.call(arguments, 1);
    return new Promise((resolve, reject) => {
      this._db.collection(col, (err, coll) => {
        if(err) {
          reject(err);
        } else {
          coll.find(...args).toArray((err, docs) => {
            if(err) {
              reject(err);
            } else {
              resolve(docs);
            }
          });
        }
      });
    });
  }

  deleteone(col) {
    const args = Array.prototype.slice.call(arguments, 1);
    return new Promise((resolve, reject) => {
      this._db.collection(col, (err, coll) => {
        if(err) {
          reject(err);
        } else {
          coll.deleteOne(...args, (err, result) => {
            if(err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }
}

export default MongoDBManager;