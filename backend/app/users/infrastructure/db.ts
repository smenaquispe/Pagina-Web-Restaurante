import { Sequelize } from "sequelize";
import { UserModel } from "../domain/user.model";
import { UserStatic, UserFactory } from "./user.factory";
import { UserAttributes } from "../domain/user.interface";
import { UserRepository } from "../domain/user.repository";

/**
 * here is the implemention of what db I wanan use
 */

export class DB implements UserRepository {

    private userModel : UserStatic
    constructor(private sequalize : Sequelize) {
        this.userModel = UserFactory(sequalize)
    }

    async getById(id : number): Promise<UserModel[]> {
        const user = await this.userModel.findAll({where: {id}})
        return user
    }

    async create(userAttributes: UserAttributes): Promise<UserModel> {
        const response = await this.userModel.create(userAttributes)       
        return response
    }
}