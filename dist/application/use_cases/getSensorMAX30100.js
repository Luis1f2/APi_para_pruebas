"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSensorMAX30100 = void 0;
const sensorMAX30100Model_1 = require("../../infrastructure/database/sensorMAX30100Model");
const getSensorMAX30100 = async () => {
    return await sensorMAX30100Model_1.SensorMAX30100Model.find().sort({ timestamp: -1 });
};
exports.getSensorMAX30100 = getSensorMAX30100;
