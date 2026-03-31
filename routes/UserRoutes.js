const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

//create the router object
const router = express.Router();

//import the controller
const userController = require("../controllers/userController");

//create the route
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

// router.get("/", userController.getUser);
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "User data",
    user: req.user,
  });
});

//export the router
module.exports = router;

//user routes
// router.post("/register", userController.createUser);
// router.post("/login", userController.loginUser);
// router.get("/", userController.getUser);
