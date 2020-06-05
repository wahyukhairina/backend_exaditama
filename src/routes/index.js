const express = require('express')
const Route = express.Router()
const football = require('./football.js')

Route
.use('/football', football)
module.exports = Route