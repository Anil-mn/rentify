import mongoose from "mongoose";
import User from '../modules/users.js'; // Import the Seller module
import { v4 as uuidv4 } from 'uuid';

const propertySchema = new mongoose.Schema({
    propertyId: {
        type: String,
        default: uuidv4,
        unique: true,
        required: true
    },
    seller: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    name: { type: String, required: true },
    place: { type: String, required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearby: { type: String, required: true },
    image: { 
        data: Buffer, 
        contentType: String 
    },
});

const Property = mongoose.model('Property', propertySchema);

export default Property;