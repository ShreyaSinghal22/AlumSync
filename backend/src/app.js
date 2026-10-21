import express from "express";
import {router as healthRoutes} from "./api/routes/healthroutes.js";
import cors from "cors";

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// API Routes
app.use("/api/v1/health", healthRoutes);

export default app;