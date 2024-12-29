import { DataTypes, Model } from "sequelize"


export class Bootcamp extends Model {}

export const initBootcamp = (dbConfig) => {
    Bootcamp.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: {msg: "El título del bootcamp no puede ser un campo vacío"},
                len: {
                    args: [20, 100],
                    msg: "El título del bootcamp debe tener entre 20 a 100 carácteres."
                },
                is: {
                    args: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s,.:;!¡¿?&(){}[\]'"-]+$/,
                    msg: "El nombre del bootcamp debe contener letras, acentos, dieresis y espacios solo del alfabeto en español y/o inglés."
                },
            }
        },
                cue: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        notEmpty: { msg: "La CUE no puede ser un campo vacío." },
                        isInt: { msg: "La CUE debe tener un valor entero." },
                        min: {
                            args: [5],
                            msg: "La CUE debe tener al menos 5."
                        },
                        max: {
                            args: [10],
                            msg: "La CUE no debe superar los 10."
                        }
                    }
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                    validate: {
                        notEmpty: { msg: "La descripción no puede ser un campo vacío." },
                        len: {
                            args: [10, 500], 
                            msg: "La descripción debe tener entre 10 a 500 carácteres."
                        },
                    },
                },
            },
                {
                    sequelize: dbConfig,
                    modelName: 'Bootcamp',
                    tableName: 'bootcamp',
                    timestamps: true,
                    paranoid: true
                }
    )
}