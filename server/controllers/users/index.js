const loginUser = require('./loginUser')
const signupUser = require('./signupUser')
const getAllUsers = require('./getAllUsers')
const getUserDetail = require('./getUserDetail')

const UsersController = {}

UsersController.loginUser = loginUser
UsersController.signupUser = signupUser
UsersController.getAllUsers = getAllUsers
UsersController.getUserDetail = getUserDetail

module.exports = UsersController