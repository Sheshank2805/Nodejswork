const db = require("../db");

function registerUser(username, password, email, callback) {
  const query = "INSERT INTO users (username, password, email) VALUES (?,?,?)";
  db.query(query, [username, password, email], callback);
}

function loginUser(username, password, callback) {
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], callback);
}

function getUsers(callback) {
  const query = "SELECT * FROM users";
  db.query(query, callback);
}

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};
