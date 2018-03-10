import express from 'express';
import PostDao from '../dao/Post.DAO';

const router = express.Router();

// Create
router.post('/', (req, res) => {
  const post = req.body;

  PostDao.createPost(post)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.error(err);
      res.statusCode = 500;
      res.end();
    });
});

router.get('/list',(req,res) => {
  PostDao.getPosts()
    .then(docs => {
      console.log(docs);
      res.json(docs)
    })
    .catch(err => {
      console.error(err);
      res.statusCode = 500;
      res.end();
    });
});

// READ
router.get('/:postId', (req, res) => {
  const postId = req.params.postId;

  PostDao.getPost(postId)
    .then(doc => {
      console.log(doc);
      res.json(doc)
    })
    .catch(err => {
      console.error(err);
      res.statusCode = 500;
      res.end();
    });
});

router.delete('/:postId', (req, res) => {
  const postId = req.params.postId;

  PostDao.deletePost(postId)
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      res.statusCode = 500;
      res.end();
    });
});

export default router;