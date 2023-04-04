import { UserRepository } from "../domain/user.repository";
import { UserAttributes } from "../domain/user.interface";
export class RegisterUser {

    constructor(private userRepository : UserRepository){}

    async run(userAttributes : UserAttributes){
        const response = await this.userRepository.create(userAttributes)
        return JSON.stringify({
            'message' : `User number ${response.id} created`,
            'user-info' : response
        })
    }
}