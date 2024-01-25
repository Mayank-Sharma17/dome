import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("signup");
});

router.get("/user/login", (req, res) => {
  res.render("login");
});

export default router;
