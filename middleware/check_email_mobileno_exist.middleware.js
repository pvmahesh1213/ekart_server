const queryList = require('../querys/querys');
let query = '';

const checkForUserExist = async function (req, res, next) {
    const emailData = await emailExist(req);
    const mobleData = await checkPhoneNumber(req);
    if (emailData.length > 0 || mobleData.length > 0) {
        if (emailData.length) {
            res.status(400).json({
                message: "Email is already in use!"
            });
            return;
        }
        res.status(400).json({
            message: "Mobile number is already in use!"
        });
        return;
    } else {
        next();
    }
}

const checkForUserExistSignIn = async function (req, res, next) {
    const emailData = await emailExist(req);
    const mobleData = await checkPhoneNumber(req);
    if (emailData.length > 0 || mobleData.length > 0) {
        if (emailData.length) {
            next();
        }
    } else {
        res.status(401).json({
            message: "Email address / password combination is incorrect, try again"
        });
        return;
    }
}

const emailExist = (req) => {
    return new Promise((resolve, reject) => {
        req.connection.query(queryList.checkEmail, [req.body.email], function (err, data) {
            if (err) reject(err);
            resolve(data);
        })
    })
};

const checkPhoneNumber = (req) => {
    return new Promise((resolve, reject) => {
        req.connection.query(queryList.checkPhoneNumber, [req.body.mobile], function (err, data) {
            if (err) reject(err);
            resolve(data);
        })
    })
};

module.exports = {
    checkForUserExist,
    checkForUserExistSignIn,
    emailExist
}