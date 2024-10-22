import express from "express";
import { register, login } from '../Controllers/authController.js';

const router = express.Router();

router.post('/register', (req, res, next) => {
    console.log('Register route hit');
    next();
}, register);

router.post('/login', (req, res, next) => {
    console.log('Login route hit');
    next();
}, login);

export default router;
