const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
  res.send("here");
})

//add posts

//delete posts

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://cjdoherty:Il2ef00d!@carlisle-master-plan.d0xqs.mongodb.net/posts?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  });
  //console.log("here");
  return client.db('posts').collection('posts');
}

module.exports = router;