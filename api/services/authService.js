const { checkUserExists, saveUser } = require('../models/user.js');
const hashPassword  = require('../utils/hashPassword.js');
const validateEmail = require('../utils/validateEmail.js')


const register = async ({name, email, password, rol}) => {
    // validaciones previas

    // verificar que se enviaran todos los datos
    if(!name, !email, !password, !rol){
        throw new Error('Todos los campos son requeridos');
    }

    //validar email

    if(!validateEmail(email)) {
        throw new Error('Formato de email invalido')
    }

    //validar numero de caracteres en contraseña

    if(password < 6){
        throw new Error('La contraseña deberia tener al menos 6 caracteres');
    }

    // validacion de recaptcha (pendiente)

    // validacion de si existe el usuario

    const userExists = await checkUserExists(email);

    if(userExists) {
        throw new Error('El usuario ya existe')
    }

    // hasheamos la constraseña

    const hashedPassword = await hashPassword(password);

    // guardar usuario

    await saveUser(name, email, hashedPassword, rol);
};

const login = async ({email, password}) => {
    //logica del login
}
 

module.exports = {
    register,
};