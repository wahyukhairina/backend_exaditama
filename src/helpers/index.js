module.exports = {
    response: (response, status, data, message ) => {
        const result = {};
        result.status = status || 200;
        result.message = message || "Success"
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