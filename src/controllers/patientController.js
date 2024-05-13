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

// export const updatePatient = (req, res) => {
//     res.send('Update single patient');
// }

export const updatePatient = async (req, res, next) => {
    try {
        const updateResult = await patientModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updateResult === null) {
            return res.status(404).json({
                message: `Patient with ObjectId: ${req.params.id} Not Found!`
            });
        }
        res.status(200).json(updateResult);
    } catch (error) {
        next(error);
    }
}

export const deleteAllPatients = async (req, res, next) => {
    try {
        // Delete all patients from database
        const deleteResult = await patientModel.deleteMany({});
        // Return response
        res.status(200).json({ message: 'All patients have been deleted' });
    } catch (error) {
        // Forward to express error handler
        next(error);
    }
}