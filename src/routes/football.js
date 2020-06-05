const express = require('express')
const Route = express.Router()

const {insertScore} = require('../controllers/football')

Route
    .post('/', insertScore)
    // .get('/leaguestanding', leaguestanding)
    // .get('/rank', rank)
module.exports = Route