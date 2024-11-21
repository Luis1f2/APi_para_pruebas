import mongoose, { Schema, Document } from 'mongoose';
import { SensorData } from '../../domain/models/SensorData';

interface SensorDataDocument extends SensorData, Document {}

const SensorDataSchema = new Schema<SensorDataDocument>({
  heartRate: { type: Number, required: true },
  spo2: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const SensorDataModel = mongoose.model<SensorDataDocument>('SensorData', SensorDataSchema);
