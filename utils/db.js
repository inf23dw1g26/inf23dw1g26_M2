'user strict';

var mysql = require('mysql2');



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: "DoacaoDeAnimais"
});



connection.connect (function (err) {
    if (err){
        console.log('Error on database connection.');
        throw err;
    }
    console.log('Database connection active.');
});

module.exports = connection;