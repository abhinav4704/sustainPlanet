const express = require('express');
const router = express.Router();
const authController = require('../controller/userController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/protected', authController.protected);

module.exports = router;
