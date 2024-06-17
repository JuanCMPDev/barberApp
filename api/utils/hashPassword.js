const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if(err) return reject('Error generating salt');
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) return reject('Error hashing password');
                resolve(hash)
            })
        })
    })
}

module.exports = hashPassword;