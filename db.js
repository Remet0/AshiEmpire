const mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASS,
  databse: 'Ashi Empire'
});

connection.connect(err => {
  console.log('connected to data base');
  if (err) throw err;
});

module.exports = connection;
