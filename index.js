const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>GET https://api-e79o.onrender.com/users</code></li>
      </ul>
    </div>
  `);
});

app.get("/users", (req, res) => {
  res.send(db.users);
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
