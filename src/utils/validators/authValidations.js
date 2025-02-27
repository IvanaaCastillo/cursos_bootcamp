import { 
    AuthError, 
    NotFoundError, 
    ValidationError
} from '../../errors/TypeError.js';


const isEmpty = (data) => {
    if(!data)  return true;

    if(Array.isArray(data) && data.length === 0) return true;

    if(typeof data === 'object' && Object.keys(data).length === 0) return true;

    return false;
};


export const isNotFound = (data) => {
    if(isEmpty(data)) throw new NotFoundError('No pudimos encontrar la data solicitada');
};


export const validatePassword = (password) => {
    if(password.length < 8) {
        throw new ValidationError('La contraseña debe contener al menos 8 caracteres');
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if(!passRegex.test(password)) {
        throw new ValidationError('La contraseña debe incluir al menos una mayúscula, una minúscula, un dígito y un carácter especial');
    }
    return true;
};


export const isNotMatchedPassword = (matchResult) => {
    if(!matchResult) throw new AuthError('Credenciales inválidas');
};


export const ensureEmailNotTaken = async(Model, email) => {
    const existingUser = await Model.findOne({ where: { email } });
    if (existingUser) throw new ValidationError('Ya existe un usuario con este correo');
};