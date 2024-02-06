const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static('public'));
app.use(express.static('public/chatwidget'));

app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/chatwidget/chat.html'));
});

process.on("SIGINT", function() {
  process.exit();
});

module.exports = app;
