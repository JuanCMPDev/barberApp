const cookie = require('cookie');

const logoutController = (req, res) => {
  const serialized = cookie.serialize('access_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', serialized);
  return res.status(200).json({ message: 'Logout exitoso' });
};

module.exports = logoutController;