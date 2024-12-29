import { DataTypes, Model } from "sequelize";

export class User extends Model{}

export const initUser = (dbConfig) => {
    User.init(
        {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate:{
                notEmpty: {msg: "El nombre no puede ser un campo vacío."},
                len: {
                    args: [2, 50],
                    msg: "El nombre debe tener entre 2 a 50 carácteres."
                },
                is: {
                    args: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
                    msg: "El nombre de usuario debe contener letras, acentos, dieresis y espacios solo del alfabeto en español y/o inglés."
                },
            }
        },
        lastName:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate:{
                notEmpty: {msg: "El apellido no puede ser un campo vacío."},
                len: {
                    args: [2, 50],
                    msg: "El apellido debe tener entre 2 a 50 carácteres."
                },
                is: {
                    args: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
                    msg: "El apellido debe contener letras, acentos, dieresis y espacios solo del alfabeto en español y/o inglés."
                },
            }
        },
        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: "El correo electrónico ingresado ya está en uso" },
            validate: {
                notEmpty: { msg: "El correo electrónico no puede ser un campo vacío." },
                isEmail: { msg: "El correo electrónico ingresado no es válido." },
                },
            },
            },
            {
                sequelize: dbConfig,
                modelName: 'User',
                tableName: 'users',
                timestamps: true,
                paranoid: true
            }
        );
}