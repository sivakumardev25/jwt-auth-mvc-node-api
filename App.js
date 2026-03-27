//import express
const express = require("express");

//create the app
const app = express();

//import the .env file
require("dotenv").config();

// middleware (AFTER app is created)
app.use(express.json());

//import the connection
const connectDB = require("./config/db.js");

//import the routes
const userRoutes = require("./routes/UserRoutes");

//connect the database
connectDB();

//use the routes
app.use("/api/user", userRoutes);

//read the environment variable or port number from the .env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
