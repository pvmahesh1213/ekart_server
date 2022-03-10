const express = require('express');
const router = express.Router();

const controllers = require('../../controllers/index.controller');
const middleware = require('../../middleware/index');

router.post('/signup', middleware.email_mobileno_exist.checkForUserExist, controllers.signup.signupController);
router.post('/signin', middleware.email_mobileno_exist.checkForUserExistSignIn, controllers.signin.signinController);


module.exports = router;
