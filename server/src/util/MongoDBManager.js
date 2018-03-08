import { MongoClient } from 'mongodb';

const address = 'localhost';
const port = '27017';
const dbname = 'gaching';

const mongoUrl = `mongodb://${address}:${port}`;

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
          this._db = db.connect(dbname);
        }
      });
      instance = this;
    }
    return instance;
  }

  insertone(col, doc) {
    console.log(this._db);
   const collection = this._db.collection(col);
   collection.insert(doc, function (err, records) {
      if(err) {
        throw Error('INSERT REFUSED: ' + err);
      }
      console.log(col, " insertOne ");
      return records;
    });
  }
  findone(col,key) {
  //  var collection = this._db.collection(col);
    this._db.collection.findOne(key , function(err, item) {
      if(err) {
        throw Error('FIND REFUSED: ' + err);
      }
      console.log(col, "FindOne := ", key);
      return item;
    });
  }
  findmany(col,key) {
 //   var collection = this._db.collection(col);
    this._db.collection.find().toArray(function(err, items) {
      if(err) {
        throw Error('FIND REFUSED: ' + err);
      }
      console.log(col, "FindMany := ", key);
      return items;
    });
  }
}

export default MongoDBManager;