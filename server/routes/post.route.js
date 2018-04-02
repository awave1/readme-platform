const express = require('express')
const passport = require('passport')
const db = require('../db')
const Post = require('../models/Post')
const PostController = require('../controllers/PostController')
const { isLoggedIn } = require('../authUtils')

const router = express.Router()

router.post('/create', isLoggedIn, async (req, res, next) => {
  console.log(req.user)
  if (!req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty" } })

  if (!req.body.title)
    return res.status(422).json({ errors: { title: "can't be empty" } })

  if (!req.body.title && !req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty", title: "can't be empty" } })

  const post = new Post(req.user)
  post.setTitle(req.body.title)
  post.setContent(req.body.content)
  const result = await PostController.createNewPost(post)

  console.log(result)

  res.json(result)
})

router.get('/all', async (req, res) => {
  const posts = await PostController.getAllPosts()
  res.json(posts)
})

router.get('/id/:postId', async (req, res) => {
  const { postId } = req.params
  const post = await PostController.getPostById(postId)
  res.json(post)
})

router.get('/:username', async (req, res) => {
  const { username } = req.params
  const posts = await PostController.getPostsForUser(username)
  res.json(posts)
})

module.exports = router
