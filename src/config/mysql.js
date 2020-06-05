const { database } = require('./index')
const mysql = require('mysql')

const connection = mysql.createConnection(database)

connection.connect((error) => {
    // if (error) console.log(error)
    // console.log('Database connected')
    if (error){
        console.log("Failed")
    } else{
        console.log('Success')
    }
})

module.exports = connection
