import express from "express";

import api from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", api.signupUser);

export default router;
