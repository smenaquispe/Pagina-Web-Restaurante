import { UserRepository } from "../domain/user.repository";

/**
 * is a "case of use"
 * this function return if the user is authorizared or not
 */

export class AuthUser{

    constructor(private userRepository : UserRepository){}

    async run(id : string) {

        const user = await this.userRepository.getById(parseInt(id))

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