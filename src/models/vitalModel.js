import mongoose from "mongoose";

const schema = mongoose.Schema 

const VitalSignSchema = new schema({
   
    date: {
        type: String,
        required: true
    },

    patientId: {
        type: String,
        required: true
    },

    temperature: {
        type: Number,
        required: true
    },

    pressure: {
        type: Number,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    height: {
        type: Number,
        required: true
    },
})

export const vitalSignModel = mongoose.model('VitalSign', VitalSignSchema)
