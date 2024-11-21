"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saveSensorMAX30100_1 = require("../../../application/use_cases/saveSensorMAX30100");
const getSensorMAX30100_1 = require("../../../application/use_cases/getSensorMAX30100");
const router = (0, express_1.Router)();
router.post('/sensor-max30100', async (req, res) => {
    try {
        const { heartRate, spo2 } = req.body;
        const data = await (0, saveSensorMAX30100_1.saveSensorMAX30100)({ heartRate, spo2, timestamp: new Date() });
        res.status(201).json({ message: 'Sensor MAX30100 data saved successfully', data });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
router.get('/sensor-max30100', async (_req, res) => {
    try {
        const data = await (0, getSensorMAX30100_1.getSensorMAX30100)();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
exports.default = router;
