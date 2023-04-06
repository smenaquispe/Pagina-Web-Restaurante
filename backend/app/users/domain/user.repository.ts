import { UserModel } from "./user.model"
import { UserAttributes } from "./user.interface"

/**
 * here there are function that I need for users
 */

export interface UserRepository {
    get(userAttributes : UserAttributes) : Promise<UserModel[]>   
    create(userAttributes : UserAttributes) : Promise<UserModel>
}