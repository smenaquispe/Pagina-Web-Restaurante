
import {Model, DataTypes, Sequelize, BuildOptions} from 'sequelize'
/**
 * in domain we create the entity, in this case user
 */
export interface UserAttributes {
    id: number,
    email: string,
    passwd: string
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof User & {
    new (values ? : object, options ? : BuildOptions) : UserModel
}

export function UserFactory(sequelize : Sequelize) : UserStatic {
    return <UserStatic>sequelize.define('users' , {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        email: {
            type: DataTypes.STRING,
        },
        passwd: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false // for don hae createdAt and updateAt
    })
}