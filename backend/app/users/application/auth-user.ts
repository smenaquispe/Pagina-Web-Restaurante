import { UserFactory } from "../domain/user";
import sequelize from "../../shared/db";

/**
 * is a "case of use"
 * this function return if the user is authorizared or not
 */

export class AuthUser{
    async run(id : string) {
        const User = UserFactory(sequelize)
        const users = await User.findAll()
        console.log(users)
        return;
    }
}