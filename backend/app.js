// File: backend/app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const handleErrors = require("./middleware/handleErrors");
const authRouter = require("./routers/auth.router");

// app initialization
const app = express();
const port = process.env.PORT || 3000;
// middleware
app.use(express.json());
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
});

app.use("/api/auth/", authRouter);
app.use(notFound); // 404 route handler
app.use(handleErrors); // global error handler

// start server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
