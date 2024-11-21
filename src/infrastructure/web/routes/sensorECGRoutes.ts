import { Router } from 'express';
import { saveSensorECG } from '../../../application/use_cases/saveSensorECG';
import { getSensorECG } from '../../../application/use_cases/getSensorECG';

const router = Router();

router.post('/sensor-ecg', async (req, res) => {
  try {
    const { heartRate } = req.body;
    const data = await saveSensorECG({ heartRate, timestamp: new Date() });
    res.status(201).json({ message: 'Sensor ECG data saved successfully', data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

router.get('/sensor-ecg', async (_req, res) => {
  try {
    const data = await getSensorECG();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected error' });
  }
});

export default router;
