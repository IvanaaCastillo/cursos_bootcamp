export const destructuringUserData = (data) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = data;

    const globalDataUser = {
        firstName,
        lastName
    };

    return [globalDataUser, email, password];
};


export const normalizeUserData = (email, password, generalData = {}) => {
    return {
        email, 
        password,
        ...generalData
    };
};


export const normalizeUserPrivateData = (user) => {
    const { id, firstName, lastName, email } = user;

    return {
        id, 
        firstName,
        lastName,
        email
    };
};