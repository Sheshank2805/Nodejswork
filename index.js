const express = require("express");
const UserController = require("./Controller/userController");

const app = express();
const port = 3003;

app.use(express.json());

// Register API
app.post("/register", UserController.register);

// Login API
app.post("/login", UserController.login);

// Get Users API
app.get("/users", UserController.getUsers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
