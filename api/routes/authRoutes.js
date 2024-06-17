const express = require('express');
const registerController = require('../controllers/registerController.js')
const router = express.Router();

router.post("/register", registerController);

module.exports = router;