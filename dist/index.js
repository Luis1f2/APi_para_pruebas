"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rabbitmq_1 = require("./infrastructure/rabbitmq/rabbitmq");
const server_1 = require("./infrastructure/web/server");
const mongoConnection_1 = require("./infrastructure/database/mongoConnection");
const startApp = async () => {
    try {
        await (0, mongoConnection_1.connectToDatabase)();
        (0, server_1.startServer)();
        const rabbitMQ = new rabbitmq_1.RabbitMQ({
            amqpUrl: 'amqp://guest:guest@174.129.202.240:5672',
            queue: 'mqtt',
            apiUrl: 'http://localhost:3000/api',
        });
        await rabbitMQ.consume();
    }
    catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
};
startApp();
