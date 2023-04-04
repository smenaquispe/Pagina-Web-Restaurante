import { UserModel } from '../domain/user.model'
import { UserAttributes } from '../domain/user.interface'
import { DataTypes, Sequelize, BuildOptions, Model } from 'sequelize'

export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof User & {
    new (values ? : object, options ? : BuildOptions) : UserModel
}

/**
 * 
 * here is the function of user factory, implements of db, 
 */

export function UserFactory(sequelize : Sequelize) : UserStatic {
    return <UserStatic>sequelize.define('users' , {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false // for don hae createdAt and updateAt
    })
}