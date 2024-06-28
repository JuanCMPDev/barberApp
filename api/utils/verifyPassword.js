const bcrypt = require('bcryptjs');

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = verifyPassword;