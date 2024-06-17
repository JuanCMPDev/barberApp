const { register } = require('../services/authService.js');

const registerController = async (req, res) => {
    try{
        await register(req.body);
        return res.status(200).json('El usuario ha sido creado');
    } catch (err) {
        console.error(err);
        return res.status(500).json(err.message || 'Internal server error.');
    }
}

module.exports = registerController;