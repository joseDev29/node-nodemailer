const express = require("express");
const path = require("path");

const config = require("./config");

const app = express();

app.set("port", config.server.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require("./routes"));
app.use(express.static(path.join(__dirname, "./public")));

module.exports = app;
