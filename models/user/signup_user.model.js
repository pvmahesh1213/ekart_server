const queryList = require('../../querys/querys');
const bcrypt = require("bcrypt");

let query = '';
const signupmodel = async (connections, data, callback) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    query = queryList.insertUserTable;
    connections.query(query, [data], callback);
}

module.exports = {
    signupmodel
}