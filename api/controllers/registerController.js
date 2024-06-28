const { register } = require('../services/authService.js');

const registerController = async (req, res) => {
    try{
        await register(req.body);
        return res.status(200).json('El usuario ha sido creado');
    } catch (err) {
        return res.status(400).json({message: err.message || 'Internal server error.'});
    }
}

module.exports = registerController;