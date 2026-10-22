import express from "express";
import { getAlumni } from "../controllers/alumnicontroller.js";

export const router = express.Router();
router.get("/", getAlumni);