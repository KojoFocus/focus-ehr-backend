import express from "express";
import {
  addDiagnosis,
  getDiagnoses,
 
} from "../controllers/diagnosisController.js";
import {
  addPatient,
  getPatients,
  deleteAllPatients,
  getPatient
  
} from "../controllers/patientController.js";
import {
  register,
  login,
  logout,
  
  
} from "../controllers/userController.js";
import {
  addVitalSign,
  getVitalSigns,
 
} from "../controllers/vitalsController.js";

const router = express.Router();

// Diagnosis routes
router.post("/diagnosis", addDiagnosis);
router.get("/diagnosis", getDiagnoses);
// router.get('/diagnosis/:id', getDiagnosis);
// router.put('/diagnosis/:id', updateDiagnosis);
// router.delete('/diagnosis/:id', deleteDiagnosis);

// Patient routes
router.post("/patients", addPatient);
router.get("/patients", getPatients);
router.get('/patient/:id', getPatient);
// router.put('/patient/:id', updatePatient);
router.delete('/patients', deleteAllPatients);

// User routes
router.post("/users/register", register);
router.post("/users/login", login);

router.post("/users/logout", logout);

// VitalSign routes
router.post("/vital-signs", addVitalSign);
router.get("/vital-signs", getVitalSigns);
// router.get('/vitalSign/:id', getVitalSign);
// router.put('/vitalSign/:id', updateVitalSign);
// router.delete('/vitalSign/:id', deleteVitalSign);

export default router;
