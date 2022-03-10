const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'ekart',
    port: 3306,
    multipleStatements: true
});

connection.connect((err) => {
    if (!err) {
        console.log('db connection established');
    } else {
        console.log(err);
    }
})

module.exports = connection;