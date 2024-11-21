"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSensorGPS = void 0;
const sensorGPSModel_1 = require("../../infrastructure/database/sensorGPSModel");
const saveSensorGPS = async (data) => {
    const sensorGPS = new sensorGPSModel_1.SensorGPSModel(data);
    return await sensorGPS.save();
};
exports.saveSensorGPS = saveSensorGPS;
