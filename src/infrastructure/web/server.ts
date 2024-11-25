import express from 'express';
import cors from 'cors';
import sensorRoutes from './routes/sensorRoutes';
import sensorECGRoutes from './routes/sensorECGRoutes';
import sensorMAX30100Routes from './routes/sensorMAX30100Routes';
import sensorGPSRoutes from './routes/sensorGPSRoutes';
import authRoutes from './routes/authRoutes';

export const startServer = () => {
  const app = express();

  app.use(
    cors({
      origin: ['http://localhost:5173', 'http://3.86.77.65'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, 
    })
  );

  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.status(200).send();
    } else {
      next();
    }
  });

  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api', sensorRoutes);
  app.use('/api', sensorECGRoutes);
  app.use('/api', sensorMAX30100Routes);
  app.use('/api', sensorGPSRoutes);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
