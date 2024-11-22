"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sensorRoutes_1 = __importDefault(require("./routes/sensorRoutes"));
const sensorECGRoutes_1 = __importDefault(require("./routes/sensorECGRoutes"));
const sensorMAX30100Routes_1 = __importDefault(require("./routes/sensorMAX30100Routes"));
const sensorGPSRoutes_1 = __importDefault(require("./routes/sensorGPSRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const startServer = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: ['http://localhost:3000', 'http://example.com'],
    }));
    app.use(express_1.default.json());
    app.use('/api/auth', authRoutes_1.default);
    app.use('/api', sensorRoutes_1.default);
    app.use('/api', sensorECGRoutes_1.default);
    app.use('/api', sensorMAX30100Routes_1.default);
    app.use('/api', sensorGPSRoutes_1.default);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};
exports.startServer = startServer;
