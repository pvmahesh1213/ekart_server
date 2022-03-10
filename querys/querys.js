module.exports = {
    createUserTable: `CREATE TABLE users(id INT(11) AUTO_INCREMENT PRIMARY KEY,email VARCHAR(100) NOT NULL,password VARCHAR(100) NOT NULL,firsname VARCHAR(100) NOT NULL,lastname VARCHAR(100) NOT NULL,mobile VARCHAR(100) NOT NULL, accesstoken text DEFAULT NULL,status VARCHAR(20) DEFAULT 'active' NOT NULL, role VARCHAR(20) DEFAULT 'user')`,

    insertUserTable: "INSERT INTO  `users` SET ?",

    checkEmail: 'SELECT * FROM `users` WHERE email = ?',

    checkPhoneNumber: "SELECT * FROM `users` WHERE mobile = ?",

    updateUserToken: "UPDATE `users` SET accesstoken = ? WHERE id = ?"
}