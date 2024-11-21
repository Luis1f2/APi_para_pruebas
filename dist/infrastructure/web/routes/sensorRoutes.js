"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saveSensorData_1 = require("../../../application/use_cases/saveSensorData");
const getSensorData_1 = require("../../../application/use_cases/getSensorData");
const router = (0, express_1.Router)();
router.post('/sensor-data', async (req, res) => {
    try {
        const { heartRate, spo2 } = req.body;
        const data = await (0, saveSensorData_1.saveSensorData)({ heartRate, spo2, timestamp: new Date() });
        res.status(201).json({ message: 'Sensor data saved successfully', data });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
router.get('/sensor-data', async (_req, res) => {
    try {
        const data = await (0, getSensorData_1.getSensorData)();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
exports.default = router;
