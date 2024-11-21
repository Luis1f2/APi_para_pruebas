import express from 'express';
import sensorRoutes from './routes/sensorRoutes';
import sensorECGRoutes from './routes/sensorECGRoutes';
import sensorMAX30100Routes from './routes/sensorMAX30100Routes';
import sensorGPSRoutes from './routes/sensorGPSRoutes';

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use('/api', sensorRoutes);
  app.use('/api', sensorECGRoutes);
  app.use('/api', sensorMAX30100Routes);
  app.use('/api', sensorGPSRoutes);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
