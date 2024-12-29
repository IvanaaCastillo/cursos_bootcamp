import { Bootcamp } from "../models/Bootcamp.model.js";
import { User } from "../models/User.model.js";



export const createUser = async (req, res) => {
    try {

        const user = await User.create(req.body)

        res.status(201).json({
            message: 'Usuario creado con éxito',
            status: 201,
            data: user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al crear el usuario',
            status: 500,
            data: null
        })

    }
}


export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.update(req.body, {
            where: { id },
            returning: true,
        })

        res.status(200).json({
            message: "Usuario actualizado con éxito",
            status: 200,
            data: user,
        });
    } catch (error) {

        res.status(500).json({
            message: "Error al actualizar el usuario",
            status: 500,
            data: null,
        });
    }
}


export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id } });

        res.status(200).json({
            message: "Usuario eliminado con éxito",
            status: 200,
        });
    } catch (error) {

        res.status(500).json({
            message: "Error al eliminar el usuario",
            status: 500,
        });
    }
};