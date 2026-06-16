import express from "express";
import { registerUser, loginUser } from "./auth.controller.js";

const router = express.Router();

// REGISTER ROUTE
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;