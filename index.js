const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

const services = require("./data/services.json");

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/services", (req, res) => {
  res.send(services);
});

app.get("/booking/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const service = services.find((s) => s.id === id);
  res.send(service);
});

app.listen(port, () => {
  console.log("server running on port", port);
});

module.exports = app;
