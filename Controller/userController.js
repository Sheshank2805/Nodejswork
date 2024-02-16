const UserModel = require("../Model/userModel");

function register(req, res) {
  const { username, password, email } = req.body;
  UserModel.registerUser(username, password, email, (err, results) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).send("Error registering user");
    } else {
      res.json({ message: "User registered successfully" });
    }
  });
}

function login(req, res) {
  const { username, password } = req.body;
  UserModel.loginUser(username, password, (err, results) => {
    if (err) {
      console.error("Error authenticating user:", err);
      res.status(500).send("Error authenticating user");
    } else if (results.length > 0) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid username or password");
    }
  });
}

function getUsers(req, res) {
  UserModel.getUsers((err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).send("Error fetching users");
    } else {
      res.json(results);
    }
  });
}

module.exports = {
  register,
  login,
  getUsers,
};
