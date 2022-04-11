const { Router } = require("express");
const { Login, Register } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.use((req, res, next) => {
  console.log("Auth Middleware runs");
  next();
});

authRouter.get("/login", Login);
authRouter.get("/register", Register);

module.exports = authRouter;
