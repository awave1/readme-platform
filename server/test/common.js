const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('assert')
const should = chai.should()
const expect = chai.expect()
const User = require('../models/user')

exports.chai = chai
exports.chaiHttp = chaiHttp
exports.should = should
exports.expect = expect
exports.assert = assert
exports.User = User
