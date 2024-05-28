import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const interestSchema = new mongoose.Schema({
    interestId: {
        type: String,
        default: uuidv4,
        unique: true,
        required: true
    },
    propertyDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
});

const Interest = mongoose.model('Interest', interestSchema);

export default Interest;