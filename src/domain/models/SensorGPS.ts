// src/domain/models/SensorGPS.ts
export interface SensorGPS {
    latitude: number;      // Latitud
    longitude: number;     // Longitud
    altitude?: number;     // Altitud (opcional)
    speed?: number;        // Velocidad (opcional)
    timestamp: Date;       // Marca de tiempo
  }
  