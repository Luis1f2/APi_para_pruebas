"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSensorECG = void 0;
const sensorECGModel_1 = require("../../infrastructure/database/sensorECGModel");
const saveSensorECG = async (data) => {
    const sensorECG = new sensorECGModel_1.SensorECGModel(data);
    return await sensorECG.save();
};
exports.saveSensorECG = saveSensorECG;
