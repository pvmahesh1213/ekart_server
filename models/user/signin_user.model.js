const queryList = require('../../querys/querys');
const bcrypt = require("bcrypt");
const middleware = require('../../middleware/index');
const jwt = require('jsonwebtoken');

let query = '';
const signinmodel = async (req, data, res, callback) => {
    const user = await middleware.email_mobileno_exist.emailExist(req);
    if (user.length > 0) {
        const validPassword = await bcrypt.compare(data.password, user[0].password);
        // query = queryList.insertUserTable;
        // connections.query(query, [data], callback);
        if (validPassword) {
            const JWTToken = jwt.sign({
                email: data.email,
                _id: data.password
            },
                'secret', {
                expiresIn: '7day'
            });
            const updatetoken = await updateaccesstoken(req, JWTToken, user[0]);
            // const usertokenDaa = await middleware.email_mobileno_exist.emailExist(req);
            req.connection.query(queryList.checkEmail, [req.body.email], callback);
        } else {
            res.status(401).json({
                message: "Please enter valid password !"
            });
            return;
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
        return;
    }
}

const updateaccesstoken = function (req, JWTToken, user) {
    return new Promise((resolve, reject) => {
        req.connection.query(queryList.updateUserToken, [JWTToken, user.id], function (err, data) {
            if (err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    signinmodel
}