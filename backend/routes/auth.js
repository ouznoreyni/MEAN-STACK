const express = require('express')
const { signup, logout } = require('../controllers/auth')
const router = express.Router();

router
    .route('/')
    .post(signup);

router
    .route('/logout')
    .post(logout);

module.exports = router;