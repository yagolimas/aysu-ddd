"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = __importDefault(require("./domain/Patient"));
const Session_1 = __importDefault(require("./domain/Session"));
test("Creating a patient and calculating the Monotony after sessions", function () {
    const patient = new Patient_1.default('1', 85, 29, 'M');
    const firstSession = new Session_1.default();
    firstSession.addHeartRate({ time: '00:10:00', value: 130 });
    firstSession.addHeartRate({ time: '00:20:00', value: 120 });
    firstSession.addHeartRate({ time: '00:30:00', value: 220 });
    firstSession.addHeartRate({ time: '03:00:00', value: 125 });
    firstSession.setRatePerceivedExertion(5);
    firstSession.setPatient(patient);
    patient.addSession(firstSession);
    const secondSession = new Session_1.default();
    secondSession.addHeartRate({ time: '00:10:00', value: 130 });
    secondSession.addHeartRate({ time: '00:20:00', value: 120 });
    secondSession.addHeartRate({ time: '00:30:00', value: 220 });
    secondSession.addHeartRate({ time: '02:00:00', value: 125 });
    secondSession.setRatePerceivedExertion(7);
    secondSession.setPatient(patient);
    patient.addSession(secondSession);
    const thirdSession = new Session_1.default();
    thirdSession.addHeartRate({ time: '00:00:30', value: 130 });
    thirdSession.addHeartRate({ time: '00:05:00', value: 120 });
    thirdSession.addHeartRate({ time: '00:10:00', value: 220 });
    thirdSession.addHeartRate({ time: '00:20:00', value: 125 });
    thirdSession.setRatePerceivedExertion(2);
    thirdSession.setPatient(patient);
    patient.addSession(thirdSession);
    const fourthSession = new Session_1.default();
    fourthSession.addHeartRate({ time: '00:10:00', value: 130 });
    fourthSession.addHeartRate({ time: '00:20:00', value: 120 });
    fourthSession.addHeartRate({ time: '00:30:00', value: 220 });
    fourthSession.addHeartRate({ time: '01:30:00', value: 125 });
    fourthSession.setRatePerceivedExertion(6);
    fourthSession.setPatient(patient);
    patient.addSession(fourthSession);
    const fifthSession = new Session_1.default();
    fifthSession.addHeartRate({ time: '00:10:00', value: 130 });
    fifthSession.addHeartRate({ time: '00:20:00', value: 120 });
    fifthSession.addHeartRate({ time: '00:30:00', value: 220 });
    fifthSession.addHeartRate({ time: '01:15:00', value: 125 });
    fifthSession.setRatePerceivedExertion(7);
    fifthSession.setPatient(patient);
    patient.addSession(fifthSession);
    const sixthSession = new Session_1.default();
    sixthSession.addHeartRate({ time: '00:00:05', value: 130 });
    sixthSession.addHeartRate({ time: '00:10:00', value: 120 });
    sixthSession.addHeartRate({ time: '00:15:00', value: 220 });
    sixthSession.addHeartRate({ time: '00:20:00', value: 125 });
    sixthSession.setRatePerceivedExertion(2);
    sixthSession.setPatient(patient);
    patient.addSession(sixthSession);
    const seventhSession = new Session_1.default();
    seventhSession.addHeartRate({ time: '00:30:00', value: 130 });
    seventhSession.addHeartRate({ time: '01:00:00', value: 120 });
    seventhSession.addHeartRate({ time: '01:30:00', value: 220 });
    seventhSession.addHeartRate({ time: '02:00:00', value: 125 });
    seventhSession.setRatePerceivedExertion(7);
    seventhSession.setPatient(patient);
    patient.addSession(seventhSession);
    const monotomyResult = patient.getMonotonyResult();
    expect(monotomyResult).toBe(1.56);
});
test("Creating a patient and calculating the Strain after sessions", function () {
    const patient = new Patient_1.default('1', 85, 29, 'M');
    const firstSession = new Session_1.default();
    firstSession.addHeartRate({ time: '00:10:00', value: 130 });
    firstSession.addHeartRate({ time: '00:20:00', value: 120 });
    firstSession.addHeartRate({ time: '00:30:00', value: 220 });
    firstSession.addHeartRate({ time: '03:00:00', value: 125 });
    firstSession.setRatePerceivedExertion(5);
    firstSession.setPatient(patient);
    patient.addSession(firstSession);
    const secondSession = new Session_1.default();
    secondSession.addHeartRate({ time: '00:10:00', value: 130 });
    secondSession.addHeartRate({ time: '00:20:00', value: 120 });
    secondSession.addHeartRate({ time: '00:30:00', value: 220 });
    secondSession.addHeartRate({ time: '02:00:00', value: 125 });
    secondSession.setRatePerceivedExertion(7);
    secondSession.setPatient(patient);
    patient.addSession(secondSession);
    const thirdSession = new Session_1.default();
    thirdSession.addHeartRate({ time: '00:00:30', value: 130 });
    thirdSession.addHeartRate({ time: '00:05:00', value: 120 });
    thirdSession.addHeartRate({ time: '00:10:00', value: 220 });
    thirdSession.addHeartRate({ time: '00:20:00', value: 125 });
    thirdSession.setRatePerceivedExertion(2);
    thirdSession.setPatient(patient);
    patient.addSession(thirdSession);
    const fourthSession = new Session_1.default();
    fourthSession.addHeartRate({ time: '00:10:00', value: 130 });
    fourthSession.addHeartRate({ time: '00:20:00', value: 120 });
    fourthSession.addHeartRate({ time: '00:30:00', value: 220 });
    fourthSession.addHeartRate({ time: '01:30:00', value: 125 });
    fourthSession.setRatePerceivedExertion(6);
    fourthSession.setPatient(patient);
    patient.addSession(fourthSession);
    const fifthSession = new Session_1.default();
    fifthSession.addHeartRate({ time: '00:10:00', value: 130 });
    fifthSession.addHeartRate({ time: '00:20:00', value: 120 });
    fifthSession.addHeartRate({ time: '00:30:00', value: 220 });
    fifthSession.addHeartRate({ time: '01:15:00', value: 125 });
    fifthSession.setRatePerceivedExertion(7);
    fifthSession.setPatient(patient);
    patient.addSession(fifthSession);
    const sixthSession = new Session_1.default();
    sixthSession.addHeartRate({ time: '00:00:05', value: 130 });
    sixthSession.addHeartRate({ time: '00:10:00', value: 120 });
    sixthSession.addHeartRate({ time: '00:15:00', value: 220 });
    sixthSession.addHeartRate({ time: '00:20:00', value: 125 });
    sixthSession.setRatePerceivedExertion(2);
    sixthSession.setPatient(patient);
    patient.addSession(sixthSession);
    const seventhSession = new Session_1.default();
    seventhSession.addHeartRate({ time: '00:30:00', value: 130 });
    seventhSession.addHeartRate({ time: '01:00:00', value: 120 });
    seventhSession.addHeartRate({ time: '01:30:00', value: 220 });
    seventhSession.addHeartRate({ time: '02:00:00', value: 125 });
    seventhSession.setRatePerceivedExertion(7);
    seventhSession.setPatient(patient);
    patient.addSession(seventhSession);
    const strainResult = patient.getStrainResult();
    expect(strainResult).toBe(5811);
});