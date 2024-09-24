const { signup, login } = require('../Controllers/AuthController');
const ensureAuth = require('../Middelware/Auth');
const { signupValidation, loginValidation } = require('../Middelware/Authvalidation')
// const ProductRouter = require('./Products'); 
const router = require('express').Router();

// router.use('../Routes/Products.js',ensureAuth,ProductRouter)
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;