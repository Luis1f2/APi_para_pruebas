"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saveSensorECG_1 = require("../../../application/use_cases/saveSensorECG");
const getSensorECG_1 = require("../../../application/use_cases/getSensorECG");
const router = (0, express_1.Router)();
router.post('/sensor-ecg', async (req, res) => {
    try {
        const { heartRate } = req.body;
        const data = await (0, saveSensorECG_1.saveSensorECG)({ heartRate, timestamp: new Date() });
        res.status(201).json({ message: 'Sensor ECG data saved successfully', data });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
router.get('/sensor-ecg', async (_req, res) => {
    try {
        const data = await (0, getSensorECG_1.getSensorECG)();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
exports.default = router;
