const { login } = require('../services/authService.js');
var cookie = require('cookie');

const loginController = async (req, res) => {
    try {
        // recuperamos el token
        const { token, user } = await login(req.body);

        // configuramos la cookie
        const serialized = cookie.serialize('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60, // 1 hora en segundos
            path: '/'
        });

        // configuramos el encabezado 
        res.setHeader('Set-Cookie', serialized);

        return res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message || 'Error interno del servidor' });
    }
};

module.exports = loginController;
