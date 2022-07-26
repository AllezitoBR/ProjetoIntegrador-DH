var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

<<<<<<< HEAD
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
var productRouter = require("./routes/produto");
var descriptionRouter = require("./routes/descriptionRoute");
=======
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
var checkoutRouter = require('./routes/checkout');
=======
>>>>>>> 139d6124c3422e4649c1fa627d49691c91bcc872
>>>>>>> master

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use(express.static(path.join(__dirname, "public/stylesheets")));
app.use(express.static(path.join(__dirname, "views/partials")));

<<<<<<< HEAD
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/pratoFundo", productRouter);
app.use("/pratoRaso", productRouter);
app.use("/description", descriptionRouter);
=======
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', checkoutRouter);
>>>>>>> master

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
