import sequelize from "../../shared/db";
import { UserAttributes } from "../domain/user";
import { UserFactory } from "../domain/user";

export class RegisterUser {
    async run(userAttributes : UserAttributes){
        const User = UserFactory(sequelize)
        const response = await User.create(userAttributes)
        return response
    }
}