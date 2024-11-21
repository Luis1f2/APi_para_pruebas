"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/web/routes/sensorGPSRoutes.ts
const express_1 = require("express");
const saveSensorGPS_1 = require("../../../application/use_cases/saveSensorGPS");
const getSensorGPS_1 = require("../../../application/use_cases/getSensorGPS");
const router = (0, express_1.Router)();
// Ruta para recibir datos del sensor GPS
router.post('/sensor-gps', async (req, res) => {
    try {
        const { latitude, longitude, altitude, speed } = req.body;
        const data = await (0, saveSensorGPS_1.saveSensorGPS)({
            latitude,
            longitude,
            altitude,
            speed,
            timestamp: new Date(),
        });
        res.status(201).json({ message: 'Sensor GPS data saved successfully', data });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
// Ruta para obtener datos del sensor GPS
router.get('/sensor-gps', async (_req, res) => {
    try {
        const data = await (0, getSensorGPS_1.getSensorGPS)();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
    }
});
exports.default = router;
