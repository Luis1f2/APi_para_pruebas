// src/infrastructure/web/routes/sensorGPSRoutes.ts
import { Router } from 'express';
import { saveSensorGPS } from '../../../application/use_cases/saveSensorGPS';
import { getSensorGPS } from '../../../application/use_cases/getSensorGPS';

const router = Router();

// Ruta para recibir datos del sensor GPS
router.post('/sensor-gps', async (req, res) => {
  try {
    const { latitude, longitude, altitude, speed } = req.body;
    const data = await saveSensorGPS({
      latitude,
      longitude,
      altitude,
      speed,
      timestamp: new Date(),
    });
    res.status(201).json({ message: 'Sensor GPS data saved successfully', data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

// Ruta para obtener datos del sensor GPS
router.get('/sensor-gps', async (_req, res) => {
  try {
    const data = await getSensorGPS();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

export default router;
