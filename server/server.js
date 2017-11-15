require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8081,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session);

mongoose.connect(process.env.DB_URI, { useMongoClient: true })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))

app.use(session ({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: false,    
    store: new MongoStore({
      mongooseConnection: mongoose.connection      
    })
}));
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
  
app.use(require('./api/routes/routes'));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});