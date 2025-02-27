import { Bootcamp } from "../models/Bootcamp.model.js";
import { User } from "../models/User.model.js";



export const createUser = async (req, res, next) => {
    try {

        const user = await User.create(req.body)

        res.status(201).json({
            message: 'Usuario creado con éxito',
            status: 201,
            data: user
        })
    } catch (error) {
        next(error);
        res.status(500).json({
            message: 'Error al crear el usuario',
            status: 500,
            data: null
        })

    }
}


export const findUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        const user = await User.findByPk(id, {
            attributes: ["id", "firstName", "lastName"], 
            include: {
            model: Bootcamp, 
            as: "bootcamps", 
            attributes: ["id", "title"], 
            through: {
                attributes: [], 
            },
            },
        });
    
        if (!user) {
            return res.status(404).json({
            message: "Usuario no encontrado",
            status: 404,
            data: null,
            });
        }
    
        res.status(200).json({
            message: "Usuario y bootcamps obtenidos con éxito",
            status: 200,
            data: user, 
        });
    } catch (error) {
        next(error);
        res.status(500).json({
            message: "Error al obtener el usuario y sus bootcamps",
            status: 500,
            data: null,
        });
    }
};


export const findAll = async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ["id", "firstName", "lastName", "email"], 
            include: {
            model: Bootcamp,
            as: "bootcamps",
            attributes: ["id", "title"], 
            through: {
                attributes: [], 
            },
            },
        });
    
    if (users.length === 0) {
        return res.status(404).json({
            message: "No hay usuarios encontrados",
            status: 404,
            data: null,
            });
        }
    
        res.status(200).json({
            message: "Usuarios obtenidos con éxito",
            status: 200,
            data: users,
        });
    } catch (error) {
        next(error);
        res.status(500).json({
            message: "Error al obtener los usuarios",
            status: 500,
            data: null,
        });
    }
};


export const updateUserById = async (req, res, next) => {
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
        next(error);
        res.status(500).json({
            message: "Error al actualizar el usuario",
            status: 500,
            data: null,
        });
    }
};


export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (updateData.password) {
            updateData.password = await hashPassword(updateData.password);  
        }

        const [updateRows, [updatedUser]] = await User.update(updateData, {
            where: { id },
            returning: true,
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        });

        if (updateRows === 0) {
            throw new Error(`No se encontró al usuario con el ID: ${id}`);
        }

        res.status(200).json({
            message: "Usuario actualizado con éxito",
            status: 200,
            newData: updatedUser,
        });
    } catch (error) {
        next(error);
    }
};


export const deleteUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id } });

        res.status(200).json({
            message: "Usuario eliminado con éxito",
            status: 200,
        });
    } catch (error) {
        next(error);
        res.status(500).json({
            message: "Error al eliminar el usuario",
            status: 500,
        });
    }
};