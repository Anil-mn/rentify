// authController.js
import User from '../modules/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



const generateToken = (userId) => {
    return jwt.sign({ id: userId }, 'rentify', { expiresIn: '1d' });
};

export const register = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = generateToken(newUser._id);
        res.status(201).json({ newUser, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user._id);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const authenticate = (req,res,next) =>{
    const authHeader = req.header.autherization;
    if(authHeader && authHeader.startsWith(`Bearer `)){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, 'rentify', (err, decode)=>{
            if(err) return res.status(401).json({'message': 'Unauthorized'})
            req.user = decode;
            next()
        })
    }else{
        res.status(400).json({'message':'No token provided'})
    }
}

