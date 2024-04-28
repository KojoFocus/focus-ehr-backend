import { diagnosisModel } from "../models/diagnosisModel.js";

export const addDiagnosis = async (req, res, next) => {
    try {
        // Add Diagnosis to the database
        const createResult = await diagnosisModel.create(req.body);
        // Return response
        res.status(201).json(createResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const getDiagnoses = async (req, res, next) => {
    try {
        // Get all diagnoses from database
        const findResult = await diagnosisModel.find();
        // Return response
        res.status(200).json(findResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const getDiagnosis = async (req, res, next) => {
    try {
        // Get single diagnosis with id
        const findByIdResult = await diagnosisModel.findById(req.params.id);
        // Return 404 if diagnosis not found
        if (findByIdResult === null) {
            return res.status(404).json({
                message: `Diagnosis with ObjectId: ${req.params.id} Not Found!`
            });
        }
        // Return response
        res.status(200).json(findByIdResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const updateDiagnosis = (req, res) => {
    res.send('Update single diagnosis');
}

export const deleteDiagnosis = (req, res) => {
    res.send('Delete single diagnosis');
}
