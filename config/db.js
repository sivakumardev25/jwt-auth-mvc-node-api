//import the mongoose library
const mongoose = require("mongoose");

//function to connect the db

const connectDB = async () => {
  try {
    //connecting the mongodb using the url
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.log("Database connection error: ", error.message);
  }
};

//export the function
module.exports = connectDB;
