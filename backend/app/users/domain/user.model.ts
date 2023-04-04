import { Model } from 'sequelize'
import { UserAttributes } from './user.interface'
/**
 * in domain we create the entity, in this case user
 */
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
