//import the mongoose
const mongoose = require("mongoose");

//creating the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
        required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

//export schema
const user = mongoose.model("user", userSchema);

module.exports = user;
