"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSensorECG = void 0;
const sensorECGModel_1 = require("../../infrastructure/database/sensorECGModel");
const getSensorECG = async () => {
    return await sensorECGModel_1.SensorECGModel.find().sort({ timestamp: -1 });
};
exports.getSensorECG = getSensorECG;
