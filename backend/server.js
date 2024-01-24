const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "Matfen",
  password: "Geralt2077!",
  database: "tlou",
});

db.connect((error) => {
  if (!error) {
    console.log("Connection réussie de la base de données");
  } else {
    console.log("Echec de la connection de la base de données");
  }
});

app.listen(PORT, () => {
  console.log("Connection au port serveur " + PORT);
});

// SUBSCRIBE
app.post("/subscribe", (req, res) => {
  let user = req.body;
  let query = `SELECT adress FROM user WHERE adress = ?`;

  db.query(query, [user.adress], (error, results) => {
    if (!error) {
      if (results.length <= 0) {
        let qr = `INSERT INTO user (adress) VALUES (?)`;
        db.query(
          qr,
          [user.adress],
          (error, results) => {
            if (!error) {
              return res.status(200).send({ message: "Abonnement réussi" });
            } else {
              console.error(error);
              return res
                .status(500)
                .send({ message: "Echec de l'abonnement" });
            }
          }
        );
      } else {
        return res.status(400).json({ message: "Compte déjà existant." });
      }
    } else {
      return res.status(400).json({ message: error });
    }
  });
});


