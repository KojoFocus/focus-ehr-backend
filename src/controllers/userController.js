import jwt from 'jsonwebtoken';
import { userModel } from '../models/userModel.js';
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashedPassword
        const user = await userModel.create(req.body);
        const token = jwt.sign({ _id: user._id }, 'YOUR_SECRET_KEY', {expiresIn: "1h"});
        res.status(201).json({ token });
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username: req.body.username });
        if ( user === null) {
            console.log( 'Invalid credentials' );
        }
        const isPasswordMatch = await bcrypt.compare(
            req.body.password,user.password
        )
        const token = jwt.sign({ _id: user._id }, 'YOUR_SECRET_KEY');
        res.status(201).json({ token });
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
