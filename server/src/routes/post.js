import express from 'express';
import PostDao from '../data/Post.DAO';

const router = express.Router();

// Create
router.post('/', (req, res) => {
  const post = req.body;
  console.log(post);

  const result = PostDao.createPost(post);

  return res.json({
    success: true
  });
});

// READ
router.get('/:postId', (req, res) => {
  console.log('reading post ', req.params.postId);
  return res.json({
    index: req.params.postId
  });
});

router.get('/list',(req,res) => {
  console.log('reading post list ');

  const docs = PostDao.getPosts({});

  return res.json({
    docs,
  });
});
export default router;