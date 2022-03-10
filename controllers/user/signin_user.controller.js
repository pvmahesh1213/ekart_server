
const signin = require('../../models/index.model');

const signinController = function (req, res) {
    signin.signin.signinmodel(req, req.body, res, function (err, row) {
        if (!err) {
            row = row[0];
            delete row.password;
            res.status(200).json({ data: row, message: 'User login successfully' });
        } else {
            res.status(500).json({ data: null, message: err ? err : "Something went wrong" });
        }
    });
}

module.exports = {
    signinController
}