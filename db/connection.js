const util = require("util");
const mysql = require("mysql");

//create connection object
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '257789601Me$',
    database: 'employee_trackerdb',
});

//connect to local db
connection.connect();

//make connection a promise to we can do a .then later
connection.query = util.promisify(connection.query);

//export the connection
module.exports = connection;