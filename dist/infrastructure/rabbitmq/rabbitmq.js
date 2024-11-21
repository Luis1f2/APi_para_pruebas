"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const axios_1 = __importDefault(require("axios"));
class RabbitMQ {
    constructor({ amqpUrl, queue, apiUrl }) {
        this.connection = null;
        this.channel = null;
        this.amqpUrl = amqpUrl;
        this.queue = queue;
        this.apiUrl = apiUrl;
    }
    async connect() {
        this.connection = await amqplib_1.default.connect(this.amqpUrl);
        this.channel = await this.connection.createChannel();
        await this.channel.assertQueue(this.queue, { durable: true });
    }
    async consume() {
        if (!this.channel) {
            await this.connect();
        }
        console.log(`Esperando mensajes en la cola ${this.queue}...`);
        this.channel?.consume(this.queue, async (message) => {
            if (message) {
                const data = message.content.toString();
                console.log('Mensaje recibido:', data);
                try {
                    const parsedData = JSON.parse(data);
                    if (parsedData.type === 'MAX30100') {
                        const transformedData = {
                            heartRate: parsedData.bpm,
                            spo2: parsedData.spo2,
                            timestamp: new Date(),
                        };
                        await axios_1.default.post(`${this.apiUrl}/sensor-data`, transformedData);
                        console.log('Datos del MAX30100 enviados a la API con éxito.');
                    }
                    else if (parsedData.type === 'GPS') {
                        const transformedData = {
                            latitude: parsedData.latitude,
                            longitude: parsedData.longitude,
                            altitude: parsedData.altitude || null,
                            speed: parsedData.speed || null,
                            timestamp: new Date(),
                        };
                        await axios_1.default.post(`${this.apiUrl}/sensor-gps`, transformedData);
                        console.log('Datos del GPS enviados a la API con éxito.');
                    }
                    else {
                        console.warn('Tipo de sensor no reconocido:', parsedData.type);
                    }
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.error('Error al procesar el mensaje:', error.message);
                    }
                    else {
                        console.error('Error desconocido:', error);
                    }
                }
                this.channel?.ack(message);
            }
        });
    }
    async close() {
        if (this.channel)
            await this.channel.close();
        if (this.connection)
            await this.connection.close();
    }
}
exports.RabbitMQ = RabbitMQ;
