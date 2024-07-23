const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'barberApp'
});

db.connect((err) => {
    if (err) {
        console.log('Database connection failed' + err.stack);
        return;
    }
    console.log('Connected to database');
})

module.exports = db;