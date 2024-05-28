import Property from '../modules/property.js';
import jwt from 'jsonwebtoken';
export const createProperty = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'your_secret_key'); 
        const userId = decoded.userId; 

        const newProperty = await Property.create({ ...req.body, seller: userId });
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const getProperty = async (req, res) => {
    try {
        const result = await Property.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error loading property" });
    }
};

export const updateProperty = async (req, res) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProperty = async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getAllProperties = async (req, res) => {
    try {
        const allProperties = await Property.find();
        res.status(200).json(allProperties);
    } catch (error) {
        res.status(400).json({ message: "Error fetching all properties" });
    }
};