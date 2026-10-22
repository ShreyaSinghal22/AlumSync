import express from "express";
import {router as healthRoutes} from "./api/routes/healthroutes.js";
import cors from "cors";
import {router as alumniRoutes} from "./api/routes/alumniroute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// API Routes
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/alumni", alumniRoutes);

export default app;