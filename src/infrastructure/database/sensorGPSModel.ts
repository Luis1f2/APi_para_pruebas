// src/infrastructure/database/sensorGPSModel.ts
import mongoose, { Schema, Document } from 'mongoose';
import { SensorGPS } from '../../domain/models/SensorGPS';

interface SensorGPSDocument extends SensorGPS, Document {}

const SensorGPSSchema = new Schema<SensorGPSDocument>({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  altitude: { type: Number },
  speed: { type: Number },
  timestamp: { type: Date, default: Date.now },
});

export const SensorGPSModel = mongoose.model<SensorGPSDocument>('SensorGPS', SensorGPSSchema);
