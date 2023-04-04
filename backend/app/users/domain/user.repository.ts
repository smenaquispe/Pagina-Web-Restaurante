import { UserModel } from "./user.model"
import { UserAttributes } from "./user.interface"

/**
 * here there are function that I need for users
 */

export interface UserRepository {
    getById(id : number) : Promise<UserModel[]>   
    create(userAttributes : UserAttributes) : Promise<UserModel>
}