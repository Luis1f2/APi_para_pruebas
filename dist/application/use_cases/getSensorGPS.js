"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSensorGPS = void 0;
// src/application/use_cases/getSensorGPS.ts
const sensorGPSModel_1 = require("../../infrastructure/database/sensorGPSModel");
const getSensorGPS = async () => {
    return await sensorGPSModel_1.SensorGPSModel.find().sort({ timestamp: -1 });
};
exports.getSensorGPS = getSensorGPS;
