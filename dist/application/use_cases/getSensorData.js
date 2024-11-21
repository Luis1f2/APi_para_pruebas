"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSensorData = void 0;
const sensorDataModel_1 = require("../../infrastructure/database/sensorDataModel");
const getSensorData = async () => {
    return await sensorDataModel_1.SensorDataModel.find().sort({ timestamp: -1 });
};
exports.getSensorData = getSensorData;
