const sql = require("mysql");

let connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sheshank@2805",
  database: "Sheshi",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = connection;
