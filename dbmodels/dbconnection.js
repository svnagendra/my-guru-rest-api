
var mysql = require('mysql');
    port = process.env.PORT || 3001;

if (port === 3001) {

    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'your_api',
        insecureAuth: true
    });
} else {

   //same as above, with live server details
}

connection.connect();

module.exports = connection;