const express = require('express');
const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController)

module.exports = router;