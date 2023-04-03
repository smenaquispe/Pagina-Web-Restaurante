import { UserFactory } from "../domain/user";
import sequelize from "../../shared/db";

/**
 * is a "case of use"
 * this function return if the user is authorizared or not
 */

export class AuthUser{
    async run(id : string) {
        const User = UserFactory(sequelize)
        const user = await User.findAll({where: {id}})

        if(user[0]) return JSON.stringify({
            'message': 'User authorizared',
            'user-info': user[0]
        }) 
        
        return JSON.stringify({
            'message':'Not user id exist',
            'user-info': null
        });
    }
}