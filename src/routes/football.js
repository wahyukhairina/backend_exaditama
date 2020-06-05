const express = require('express')
const Route = express.Router()

const {insertScore, allStanding} = require('../controllers/football')

Route
    .post('/recordgame', insertScore)
    .get('/leaguestanding', allStanding)
    // .get('/rank', rank)
module.exports = Route