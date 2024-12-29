import { dbConfig } from '../config/db.config.js'
import { initModel } from '../utils/db/initModel.js'
import { setupAssociation } from "../utils/db/setupAssociations.js";


export const dbConnect = async() =>{
    try {
        await dbConfig.authenticate();
        initModel(dbConfig)
        setupAssociation()
        await dbConfig.sync({ alter:true })
    
            console.log('Se ha logrado la conexión a Postgres a través de Sequelize 🌠')
    } catch (error) {
        console.error('No pudimos conectarnos a la DB ☠️', error);
        process.exit(1)
    }
}