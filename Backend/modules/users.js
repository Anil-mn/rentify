import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'
import bycrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: uuidv4,
        unique: true,
        required: true
    },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    userType: { type: String, enum: ['buyer', 'seller'], required: true }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bycrypt.hash(this.password, 12);
    next();
});
const User = mongoose.model('User', userSchema);

export default User;