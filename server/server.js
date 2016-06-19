const express = require('express');
const app = express();

const mongoose = require('mongoose');

const port = 3000;

// connect to mongo database named myApp
mongoose.connect('mongodb://localhost/myApp');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(port, () => console.log(`Listening on port ${port}`));