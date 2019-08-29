const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projectrn'
})
conn.connect()
module.exports = conn