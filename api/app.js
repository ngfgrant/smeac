var express = require("express");
require("./db");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var weatherRouter = require("./routes/weather");
var tidesRouter = require("./routes/tides");
var administrationRouter = require("./routes/administration");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/weather", weatherRouter);
app.use("/tides", tidesRouter);
app.use("/administration", administrationRouter);

module.exports = app;
