const db = require('../config/db.js');

const checkUserExists = (email) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM barberApp.users WHERE email = ?';
        db.query(q, [email], (err, data) => {
            if(err) return reject(err);
            resolve(data.length > 0);
        })
    })
}

const saveUser = (name, email, hashedPassword, rol) => {
    return new Promise((resolve, reject) => {

        const q = 'INSERT INTO barberApp.users(`name`, `email`, `password`, `rol`) VALUES (?, ?, ?, ?)';

        const values = [name, email, hashedPassword, rol];

        db.query(q, values, (err, data) => {
            if(err) return reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    checkUserExists,
    saveUser
}