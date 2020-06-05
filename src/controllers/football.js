const model = require('../models/football.js')
// const miscHelper = require('../helpers')

module.exports = {
    insertScore: async (request, response) => {
        try {
const {clubhome, clubaway, score} =request.body;
const eachScore = score.split(':');
let homepoints;
let awaypoints;
if ( (parseInt(eachScore[0].trim())) > (parseInt(eachScore[1].trim())) )
{
    homepoints = 3;
    awaypoints = 0;
} else if ( (parseInt(eachScore[1].trim())) >  (parseInt(eachScore[0].trim())) )
{
    homepoints = 0;
    awaypoints = 3;
}   
else{    
    homepoints = 1;
    awaypoints = 1;
}              

const data = {
    clubhome,
    clubaway,
    homepoints,
    awaypoints,
}
await model.insertScore(data)

            } catch (error) {
             response.json({message: 'insert record Error'})
            }
            
        }
    }
