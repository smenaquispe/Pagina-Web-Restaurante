
import {Optional, Model, DataTypes} from 'sequelize'
/**
 * in domain we create the entity, in this case user
 */

interface UserAttributes {
    id: number,
    email: string, 
    passwd: string
}

export interface UserInput extends Required<UserAttributes> {}

export class User extends Model<UserAttributes,UserInput> implements UserAttributes {
    public id!: number
    public email!: string 
    public passwd!: string
}