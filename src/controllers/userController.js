import jwt from 'jsonwebtoken';
import { userModel } from '../models/userModel.js';

export const register = async (req, res, next) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ _id: user._id }, 'YOUR_SECRET_KEY');
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
}

export const profile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    // This depends on how you handle authentication.
    // For example, if you're using sessions, you might do something like `req.session.destroy()`
    // If you're using JWT, you might remove the JWT from a blacklist
    res.status(200).json({ message: 'Successfully logged out' });
}
