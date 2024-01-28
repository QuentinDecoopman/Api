const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST https://api-e79o.onrender.com/login</code></li>
        
      </ul>
    </div>
  `);
});

app.post("/login", (req, res) => {
  console.log("POST /login", request.body);

  const { email, password } = request.body;

  let username;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
  }

  if (username) {
    console.log("200 OK", username);
    res.json({
      pseudo: username,
    });
  } else {
    console.log("401 UNAUTHORIZED");
    res.status(401).end();
  }
});

app.post("/forgot", (req, res) => {
  const { email } = request.body;
  if (db.users[email]) {
    res.json({
      pseudo: db.users[email].username,
    });
  } else {
    res.status(400).end();
  }
});

const db = {
  users: [
    {
      id: 1,
      name: "John",
      password: 123,
    },
    {
      id: 2,
      name: "Jane",
      password: 123,
    },
    {
      id: 3,
      name: "Joe",
      password: 123,
    },
  ],
};

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
