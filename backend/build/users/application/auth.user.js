"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
/**
 * is a "case of use"
 * this function return if the user is authorizared or not
 */
class AuthUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(email, passwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.get({ email, passwd });
            if (user[0])
                return JSON.stringify({
                    'message': 'User authorizared',
                    'user-info': user[0]
                });
            return JSON.stringify({
                'message': 'Not user id exist',
                'user-info': null
            });
        });
    }
}
exports.AuthUser = AuthUser;
