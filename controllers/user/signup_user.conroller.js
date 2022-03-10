
const signup = require('../../models/index.model');

const signupController = function (req, res) {
    signup.signup.signupmodel(req.connection, req.body, function (err) {
        if (!err) {
            res.status(200).json({ data: null, message: 'User created successfully' });
        } else {
            res.status(500).json({ data: null, message: err ? err : "Something went wrong" });
        }
    });
}

module.exports = {
    signupController
}