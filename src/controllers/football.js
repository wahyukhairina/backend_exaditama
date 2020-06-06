const model = require('../models/football.js')
const helper = require('../helpers')


module.exports = {
    insertScore: async (request, response) => {
        try {
            const { clubhome, clubaway, score } = request.body;
            const eachScore = score.split(':');
            let homepoints;
            let awaypoints;
            if ((parseInt(eachScore[0].trim())) > (parseInt(eachScore[1].trim()))) {
                homepoints = 3;
                awaypoints = 0;
            } else if ((parseInt(eachScore[1].trim())) > (parseInt(eachScore[0].trim()))) {
                homepoints = 0;
                awaypoints = 3;
            }
            else {
                homepoints = 1;
                awaypoints = 1;
            }

            const data = {
                clubname: [clubhome, clubaway],
                clubpoints: [homepoints, awaypoints]
            }
            await model.insertScore(data)
            helper.response(response, 200, request.body, "Data has been recorded")
        } catch (error) {
            console.log(error)
            helper.customErrorResponse(response, 404, 'error')
        }

    },

    allStanding: async (request, response) => {
        try {
            const result = await model.getAll();
            helper.response(response, 200, result)
        }
        catch (error) {
            console.log(error)
            helper.customErrorResponse(response, 404, 'error')
        }
    },

    clubRank: async (request, response) => {
        try {
            const clubname = request.query.clubname;

            const result = await model.getAll()
            const data = result;
            let index = data.map(function (e) { return e.clubname }).indexOf(clubname);
            console.log(index, 'index')
            if (++index == 0) {
                helper.customErrorResponse(response, 404, "Not Found!")
            } else {
                const data = result[--index]
                data.standing = ++index
                helper.response(response, 200, data)
            }
        }
        catch(error){
            helper.customErrorResponse(response, 404, 'error')

        }
    }
}
