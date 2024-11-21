"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const User_1 = __importDefault(require("../../domain/models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = async (email, password) => {
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = new User_1.default({ email, password: hashedPassword });
    return await newUser.save();
};
exports.registerUser = registerUser;
