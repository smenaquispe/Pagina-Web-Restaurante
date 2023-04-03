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
    HOST: '127.0.0.1',
    PORT: 3306,
    USER: 'root'    ,
    PASSWORD: '1234',
    DB: 'webDelivery',
    dialect: 'mysql', 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default dbConfig;
