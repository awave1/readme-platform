
const chai = require('chai')
const chaiHttp = require('chai-http')
const bcrypt = require('bcrypt')
const supertest = require('supertest')
const faker = require('faker')

const Comment = require('../models/Comment')
const User = require('../models/User')
const Post = require('../models/Post')
const Tag = require('../models/Tag')
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')
const app = require('../app')
const server = require('../server')
const db = require('../db')
const should = chai.should
const expect = chai.expect

exports.chai = chai
exports.chaiHttp = chaiHttp
exports.app = app
exports.server = server
exports.should = should
exports.expect = expect
exports.supertest = supertest
exports.faker = faker
exports.request = supertest
exports.agent = supertest.agent(app)
exports.Comment = Comment
exports.User = User
exports.Post = Post
exports.Tag = Tag
exports.UserController = UserController
exports.PostController = PostController
exports.db = db
exports.bcrypt = bcrypt

exports.randUser = () => {
  const name = faker.name.findName()
  user = new User(
    name[0],
    name[1],
    faker.internet.userName(),
    faker.internet.email(),
    "verysecret",
    new Date().toJSON())
  return user
}
