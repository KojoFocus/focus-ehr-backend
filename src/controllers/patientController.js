import { patientModel } from "../models/patientModel.js";

export const addPatient = async (req, res, next) => {
    try {
        console.log('function is being called')
        // Add Patient to the database
        const createResult = await patientModel.create(req.body);
        // Return response
        console.log('jiji', createResult)
        res.status(201).json(createResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const getPatients = async (req, res, next) => {
    try {
        // Get all patients from database
        const findResult = await patientModel.find();
        // Return response
        res.status(200).json(findResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const getPatient = async (req, res, next) => {
    try {
        // Get single patient with id
        const findByIdResult = await patientModel.findById(req.params.id);
        // Return 404 if patient not found
        if (findByIdResult === null) {
            return res.status(404).json({
                message: `Patient with ObjectId: ${req.params.id} Not Found!`
            });
        }
        // Return response
        res.status(200).json(findByIdResult);
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}

export const updatePatient = (req, res) => {
    res.send('Update single patient');
}

export const deletePatient = (req, res) => {
    res.send('Delete single patient');
}
