import express from "express";
import { handleUserSignup, handleUserLogin } from "../controllers/user.js";

const router = express.Router();

router.post("/user", handleUserSignup);
router.post("/user/login", handleUserLogin);

export default router;
