import mongoose from "mongoose";

const schema = mongoose.Schema 

const PatientSchema = new schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },
})

export const patientModel = mongoose.model('Patient', PatientSchema)
