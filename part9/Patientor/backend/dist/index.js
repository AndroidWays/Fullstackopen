"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const patients_1 = __importDefault(require("./data/patients"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 3001;
app.get("/api/patients", (_req, res) => {
    res.json(patients_1.default); // Return all patient data
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
