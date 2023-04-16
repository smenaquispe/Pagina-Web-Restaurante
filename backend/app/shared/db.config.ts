import {Dialect} from 'sequelize'

interface poolStructure {
    max: number
    min: number
    acquire: number
    idle: number
}

interface dbStructure {
    HOST: string
    PORT: number
    USER: string
    PASSWORD: string
    DB: string
    dialect: Dialect
    pool: poolStructure
}


const dbConfig : dbStructure = {
    HOST: 'containers-us-west-142.railway.app',
    PORT: 6430,
    USER: 'root'    ,
    PASSWORD: 'yte8rqb61vpMeZovEpiQ',
    DB: 'railway',
    dialect: 'mysql', 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default dbConfig;
