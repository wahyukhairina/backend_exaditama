const express = require('express')
const Route = express.Router()

const {insertScore, allStanding, clubRank} = require('../controllers/football')

Route
    .post('/recordgame', insertScore)
    .get('/leaguestanding', allStanding)
    .get('/clubrank', clubRank)
module.exports = Route