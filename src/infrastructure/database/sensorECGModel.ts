import mongoose, { Schema, Document } from 'mongoose';
import { SensorECG } from '../../domain/models/SensorECG';

interface SensorECGDocument extends SensorECG, Document {}

const SensorECGSchema = new Schema<SensorECGDocument>({
  heartRate: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const SensorECGModel = mongoose.model<SensorECGDocument>('SensorECG', SensorECGSchema);
