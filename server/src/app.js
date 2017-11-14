const express = require('express'),
    app = express(),
    port = process.env.PORT || 8081;

app.use(require('./routes/routes'));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});