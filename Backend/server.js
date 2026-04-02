require("dotenv").config();

// server.js or app.js
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());



// routes
app.use("/api/todos", taskRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });