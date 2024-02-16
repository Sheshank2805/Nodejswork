const express = require("express");
const fs = require("fs");
const app = express();
const usersDataPath = "./users.json";
app.use(express.json());

app.get("/users", (req, res) => {
  fs.readFile(usersDataPath, (err, data) => {
    if (err) {
      res.status(500).send("Error reading user data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.post("/register", (req, res) => {
  const userData = req.body;
  fs.readFile(usersDataPath, (err, data) => {
    if (err) {
      res.status(500).send("Error reading user data");
    } else {
      const users = JSON.parse(data);
      users.push(userData);
      fs.writeFile(usersDataPath, JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send("Error registering user");
        } else {
          res.json(userData);
        }
      });
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  fs.readFile(usersDataPath, (err, data) => {
    if (err) {
      res.status(500).send("Error reading user data");
    } else {
      const users = JSON.parse(data);
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );
      if (foundUser) {
        res.send("Login successful");
      } else {
        res.status(401).send("Invalid username or password");
      }
    }
  });
});

app.listen(3001, () => {
  console.log("Successfully running on 3001");
});
