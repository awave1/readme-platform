const Router = require('express-promise-router')
const db = require('../db')
const Post = require('../models/Post')
const PostController = require('../controllers/PostController')
const { isLoggedIn } = require('../authUtils')

const router = Router()

router.post('/create', isLoggedIn, async (req, res, next) => {
  if (!req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty" } })

  if (!req.body.title)
    return res.status(422).json({ errors: { title: "can't be empty" } })

  if (!req.body.title && !req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty", title: "can't be empty" } })

  const post = new Post(req.user)
  const result = await PostController.createNewPost(post)

  res.json(result)
})

router.get('/all', async (req, res) => {
  const posts = await PostController.getAllPosts()
  res.json(posts)
})

router.get('/:username', async (req, res) => {
  const { username } = req.params
  const posts = await PostController.getPostsForUser(username)
  console.log(posts)
  res.json(posts)
})

module.exports = router
