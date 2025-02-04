import { dbConnect } from "./dbConnection.js";

export const serverInit = async(app, port) => {
    try {
        console.log('Verificando conexión a la base de datos');
        await dbConnect()
        app.listen(port, () => {
            try {
            console.log('El transportador de correos está disponible para utilizarlo')
            } catch (error) {
                console.error('Error al verificar la conexión de correo:', error);
            }
            console.log(`Servidor corriendo en el puerto ${port} 👾`);
        })
    } catch (error) {
        console.error('Error al inicializar el servidor', error);
    }
}