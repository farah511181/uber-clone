const express = require('express');
const router = express.Router();
const { body } = require("express-validator")


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname,firstname').isLength({ min: 3}).withMessage('First name must be at least 3 character long'),
    body('password').isLength({ min: 6}).withMessage('Password name must be at least 6 character long'),
],
   usercontroller.registerUser
)

module.exports = router;