import { Router } from 'express';
import { saveSensorData } from '../../../application/use_cases/saveSensorData';
import { getSensorData } from '../../../application/use_cases/getSensorData';

const router = Router();

router.post('/sensor-data', async (req, res) => {
  try {
    const { heartRate, spo2 } = req.body;
    const data = await saveSensorData({ heartRate, spo2, timestamp: new Date() });
    res.status(201).json({ message: 'Sensor data saved successfully', data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

router.get('/sensor-data', async (_req, res) => {
  try {
    const data = await getSensorData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

export default router;
