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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_entity_1 = require("../entities/user.entity");
const data_source_1 = require("../config/data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltRounds = 10;
            const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
            return hashedPassword;
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            return user;
        });
    }
    createUser(username, email, password, bio) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_entity_1.User();
            user.username = username;
            user.email = email;
            user.password = password;
            user.bio = bio;
            return this.userRepository.save(user);
            return yield this.userRepository.save(user);
        });
    }
    updateUser(id, updatedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.save(Object.assign({ id }, updatedUser));
            return user;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete(id);
        });
    }
}
exports.userService = new UserService();
