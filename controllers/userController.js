//import the model
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//create User using POST API

exports.createUser = async (req, res) => {
  try {
    //create the data from the request body (postman)
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create the user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    //save the user
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create User",
      error: error.message,
    });
  }
};

//Get the user data using GET API
exports.getUser = async (req, res) => {
  try {
    //
    const getUser = await User.find();

    //send the response
    res.status(200).json({
      message: "User Fetched Successfully",
      success: true,
      user: getUser,
    });
  } catch (error) {
    //error response
    res.status(500).json({
      message: "Failed to fetch User",
      success: false,
      error: error.message,
    });
  }
};

//user login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });

    // generate token INSIDE try
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
