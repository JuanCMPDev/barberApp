const express = require('express');
const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const router = express.Router();
const autenticateToken = require('../middlewares/authMiddleware.js');
const logoutController = require('../controllers/logoutController.js');

router.post("/register", autenticateToken, registerController);
router.post("/login", loginController)
router.post("/logout", logoutController)

module.exports = router;