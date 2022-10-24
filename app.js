var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('./routes/index');

// ************* Users Routes *************
var usersRouter = require('./routes/users/users.route');
// ************* Users Routes *************

// ************* Boutique Routes *************
var produitRouter = require('./routes/boutique/produit.route');
var categorieProduitRouter = require('./routes/boutique/categorie.route');
var commandeRouter = require('./routes/boutique/commande.route');
var cardRouter = require('./routes/boutique/card.route');
var homeRouter = require('./routes/boutique/ecommerce.routeroute');

// ************* Boutique Routes *************


const dotenv = require('dotenv').config()
const db = require('./config/database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'ejs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public",express.static(path.join(__dirname, 'public')));

app.use(cors({
    origin: '*'
}));

// ************* List Routes *************
app.use('/', indexRouter);

// ************* Users Routes *************
app.use('/users', usersRouter);
// ************* Users Routes *************

// ************* Boutique Routes *************
app.use('/produit', produitRouter);
app.use('/categorie-produit', categorieProduitRouter);
app.use('/commande', commandeRouter);
app.use('/card', cardRouter);
app.use('/ecommerce', homeRouter);

// ************* Boutique Routes *************

// ************* Boutique HomePage Routes *************

// ************* Boutique HomePage Routes *************


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
