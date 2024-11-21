"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSensorData = void 0;
const sensorDataModel_1 = require("../../infrastructure/database/sensorDataModel");
const saveSensorData = async (data) => {
    const sensorData = new sensorDataModel_1.SensorDataModel(data);
    return await sensorData.save();
};
exports.saveSensorData = saveSensorData;
