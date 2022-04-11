const { Router } = require("express");
const { Welcome, greet, protected } = require("../controllers/index.controller");
const {authRequire} = require("../middlewares/auth.middleware")

indexRouter = Router();

indexRouter.use((req, res, next) => {
  console.log("Index Middleware");
  next();
});

indexRouter.get("/", Welcome);
indexRouter.get("/greet", greet);
indexRouter.post("/protected", authRequire, protected);

module.exports = indexRouter;
