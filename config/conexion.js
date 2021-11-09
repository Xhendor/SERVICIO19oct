const mysql = require("mysql2");

module.exports = mysql.createPool({
	host: "localhost",
	user: "twuser",
	password: "1234ABC%",
	database: "my_store",
	port:3406
})