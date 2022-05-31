const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tinfoil1878",
    database: "employees"
});

connection.connect();

module.exports = connection;
