import { Router } from 'express';
import { saveSensorMAX30100 } from '../../../application/use_cases/saveSensorMAX30100';
import { getSensorMAX30100 } from '../../../application/use_cases/getSensorMAX30100';

const router = Router();

router.post('/sensor-max30100', async (req, res) => {
  try {
    const { heartRate, spo2 } = req.body;
    const data = await saveSensorMAX30100({ heartRate, spo2, timestamp: new Date() });
    res.status(201).json({ message: 'Sensor MAX30100 data saved successfully', data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

router.get('/sensor-max30100', async (_req, res) => {
  try {
    const data = await getSensorMAX30100();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

export default router;
