const express = require('express'),
    app = express(),
    port = process.env.PORT || 8081;

app.get('/', function () {
   res.send('Hello, I am the app!');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});