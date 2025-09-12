import express from "express";
import { getAllBarbies } from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAllBarbies);

export default router;