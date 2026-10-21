import express from "express";
import { getHealth } from "../controllers/healthcontroller.js";

export const router = express.Router();

router.get("/", getHealth);

