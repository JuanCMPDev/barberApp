const jwt = require('jsonwebtoken');
var cookie = require('cookie');

const autenticateToken = (req, res, next) => {

  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.access_token;

  if (token === undefined || !token) {
    return next();
  }

  jwt.verify(token, 'clave_secreta', (err, user) => {
    if (err) {
      return next();
    }

    return res.status(200).json({ redirectTo: '/' });
  });
};

module.exports = autenticateToken;