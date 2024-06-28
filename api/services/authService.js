const { checkUserExists, saveUser, getUserByEmail } = require('../models/user.js');
const hashPassword  = require('../utils/hashPassword.js');
const validateEmail = require('../utils/validateEmail.js');
const validatePassword = require('../utils/validatePassword.js');
const verifyPassword = require('../utils/verifyPassword.js');
const jwt = require('jsonwebtoken');

const register = async ({name, email, password, rol}) => {
    // validaciones previas ⤵
    // verificar que se enviaran todos los datos
    if(!name || !email || !password || !rol){
        throw new Error('Todos los campos son requeridos');
    };

    //validar email
    if(!validateEmail(email)) {
        throw new Error('Formato de email invalido');
    };

    //validar formato de la contraseña
    const passwordError = validatePassword(password);
    if(passwordError){
        throw new Error(passwordError);
    }

    // validacion de recaptcha (pendiente)

    // validacion de si existe el usuario
    const userExists = await checkUserExists(email);
    if(userExists) {
        throw new Error('El usuario ya existe');
    };

    // hasheamos la constraseña
    const hashedPassword = await hashPassword(password);

    // guardar usuario
    await saveUser(name, email, hashedPassword, rol);
};

const login = async ({email, password}) => {

    // verificamos que se enviaran el correo y la contraseña:
    if (!email || !password) {
        throw new Error('Todos los campos son requeridos');
    };

    // buscamos el usuario en la base de datos:
    const user = await getUserByEmail(email);
    if (!user || !user.password) {
        throw new Error('Usuario no encontrado o contraseña incorrecta');
    }

    //validamos la constraseña:
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid){
        throw new Error('Usuario no encontrado o contraseña incorrecta');
    };

    // creamos un JWT para la sesión:
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        rol: user.rol,
    }, 
    'clave_secreta', 
    { expiresIn: '1h'});

    return token;
};

module.exports = {
    register,
    login
};
