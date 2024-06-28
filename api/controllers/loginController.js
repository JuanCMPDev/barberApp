const {login} = require('../services/authService.js');
var cookie = require('cookie');

const loginController = async (req, res) => {
    try{
        // recuperamos el token
        const token = await login(req.body);
        // creamos la cookie
        const serialized = cookie.serialize('access_token', token);
        // configuramos el encabezado 
        res.setHeader('Set-Cookie', serialized,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 1000 * 60 * 60,
            path: '/'
        });
        return res.status(200).json('Login correcto')
    } catch(err){
        res.status(400).json({message: err.message || 'error interno del servidor'});
    }
}

module.exports = loginController;