module.exports = {
    response: (response, status, data) => {
        const result = {};
        result.status = status || 200;
        result.result = data
        return response.status(result.status).json(result)
    },

    customErrorResponse: (response, status, mesage) => {
        const result = {}
        result.status = status || 400
        result.mesage = mesage

        return response.status(result.status).json(result)
    }
}