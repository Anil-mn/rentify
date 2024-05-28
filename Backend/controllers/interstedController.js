import Interested from '../modules/intersted.js';

export const createInterested = async (req, res) => {
    try {
        const newInterested = await Interested.create(req.body);
        res.status(201).json(newInterested);
    } catch (error) {
        res.status(400).json({ message: "Error in adding interested" });
    }
};

export const getInterested = async (req, res) => {
    try {
        const result = await Interested.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error loading interested" });
    }
};

export const updateInterested = async (req, res) => {
    try {
        const updatedInterested = await Interested.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedInterested);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteInterested = async (req, res) => {
    try {
        await Interested.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};