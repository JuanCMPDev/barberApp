const validatePassword = (password) => {
    
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return 'La contraseña debe tener al menos 6 caracteres';
    }
    if (!hasUpperCase) {
        return 'La contraseña debe tener al menos una letra mayúscula';
    }
    if (!hasLowerCase) {
        return 'La contraseña debe tener al menos una letra minúscula';
    }
    if (!hasNumbers) {
        return 'La contraseña debe tener al menos un número';
    }
    if (!hasSpecialChar) {
        return 'La contraseña debe tener al menos un carácter especial';
    }
    
    return null;
};

module.exports = validatePassword;
