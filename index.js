const express = require("express");
const authRouter = require("./routes/auth.router");
const indexRouter = require("./routes/index.router");

const app = express();
app.use(express.json());

// Global middleware
app.use((req, res, next) => {
  console.log("Global Middleware");
  next();
});

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(8800, () => console.log("💕 Server up and runninng "));
