require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8081,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect(process.env.DR_URI);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH, OPTIONS');
    next();
});
  
app.use(require('./api/routes/routes'));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});