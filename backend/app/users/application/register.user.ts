import { UserRepository } from "../domain/user.repository";
import { UserAttributes } from "../domain/user.interface";
export class RegisterUser {

    constructor(private userRepository : UserRepository){}

    async run(userAttributes : UserAttributes){
        const response = await this.userRepository.create(userAttributes)
        console.log(response)
        return response
    }
}