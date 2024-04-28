import mongoose from "mongoose";

const schema = mongoose.Schema 

const DiagnosisSchema = new schema({
    patientId: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },
})

export const diagnosisModel = mongoose.model('Diagnosis', DiagnosisSchema)
