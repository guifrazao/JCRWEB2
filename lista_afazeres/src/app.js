const express = require("express");

const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const path = require("path");
app.use(express.static(path.join(__dirname, "view")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const tarefasRoutes = require('./routes/tarefasRoutes');
app.use('/', tarefasRoutes);

module.exports = app;