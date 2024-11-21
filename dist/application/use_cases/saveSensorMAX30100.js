"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSensorMAX30100 = void 0;
const sensorMAX30100Model_1 = require("../../infrastructure/database/sensorMAX30100Model");
const saveSensorMAX30100 = async (data) => {
    const sensorData = new sensorMAX30100Model_1.SensorMAX30100Model(data);
    return await sensorData.save();
};
exports.saveSensorMAX30100 = saveSensorMAX30100;
