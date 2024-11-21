"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const User_1 = __importDefault(require("../../domain/models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = async (email, password) => {
    const user = await User_1.default.findOne({ email });
    if (!user)
        throw new Error('User not found');
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid)
        throw new Error('Invalid credentials');
    const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '1h'
    });
    return token;
};
exports.loginUser = loginUser;
