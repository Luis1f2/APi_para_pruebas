"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerUser_1 = require("../../../application/use_cases/registerUser");
const loginUser_1 = require("../../../application/use_cases/loginUser");
const router = (0, express_1.Router)();
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await (0, registerUser_1.registerUser)(email, password);
        res.status(201).json({ message: 'User registered successfully', user });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await (0, loginUser_1.loginUser)(email, password);
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.default = router;
