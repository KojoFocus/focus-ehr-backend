import { vitalSignModel } from "../models/vitalModel.js";

export const addVitalSign = async (req, res, next) => {
    try {
        // Add VitalSign to the database
        const createResult = await vitalSignModel.create(req.body);
        // Return response
        res.status(201).json(createResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const getVitalSigns = async (req, res, next) => {
    try {
        // Get all vitalSigns from database
        const findResult = await vitalSignModel.find();
        // Return response
        res.status(200).json(findResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const getVitalSign = async (req, res, next) => {
    try {
        // Get single vitalSign with id
        const findByIdResult = await vitalSignModel.findById(req.params.id);
        // Return 404 if vitalSign not found
        if (findByIdResult === null) {
            return res.status(404).json({
                message: `VitalSign with ObjectId: ${req.params.id} Not Found!`
            });
        }
        // Return response
        res.status(200).json(findByIdResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const updateVitalSign = (req, res) => {
    res.send('Update single vitalSign');
}

export const deleteVitalSign = (req, res) => {
    res.send('Delete single vitalSign');
}
