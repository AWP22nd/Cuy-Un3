const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cuy_university',
    port: 3307,
    socketPath: '/opt/lampp/var/mysql/mysql.sock'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Database connected successfully');
});

module.exports = db;
