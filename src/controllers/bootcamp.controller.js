import { Bootcamp } from "../models/Bootcamp.model.js";
import { User } from "../models/User.model.js";


//Create lo crea sequelize
export const createBootcamp = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)

        res.status(201).json({
            message: 'Bootcamp creado con éxito',
            status: 201,
            data: bootcamp
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: 'Error al crear un bootcamp',
            status: 500,
            data: null
        })
    }
}


export const updateBootcamp = async (req, res) => {
    try {
        const { id } = req.params;
        const bootcamp = await Bootcamp.update(req.body, {
            where: { id },
            returning: true,
        })

        res.status(200).json({
            message: "Bootcamp actualizado con éxito",
            status: 200,
            data: bootcamp,
        });
    } catch (error) {

        res.status(500).json({
            message: "Error al actualizar el bootcamp",
            status: 500,
            data: null,
        });
    }
}


export const deleteBootcampById = async (req, res) => {
    try {
        const { id } = req.params;
        await Bootcamp.destroy({ where: { id } });

        res.status(200).json({
            message: "Bootcamp eliminado con éxito",
            status: 200,
        });
    } catch (error) {
            
        res.status(500).json({
            message: "Error al eliminar el bootcamp",
            status: 500,
        });
    }
};