const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello MyApp (Keycloak-ready)");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(8080, () => {
  console.log("App running on 8080");
});