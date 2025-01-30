export const destructuringUserData = (data) => {
    const {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        password,
        fecha_nacimiento,
        admin
    } = data;

    const globalDataUser = {
        nombre,
        apellido_paterno,
        apellido_materno,
        telefono,
        fecha_nacimiento,
        admin
    };

    return [globalDataUser, email, password];
};


export const normalizeUserData = (email, password, ...generalData) => {
    return {
        email, 
        password,
        ...generalData
    };
};


export const normalizeUserPrivateData = (user) => {
    const { id, nombre, apellido_paterno, apellido_materno, email } = user;

    return {
        id, 
        nombre,
        apellido_paterno,
        apellido_materno,
        email
    };
};