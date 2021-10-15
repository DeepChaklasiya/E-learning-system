const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

require('dotenv').config();

// Database
require('./configs/mongoose.config');

// Debugger
require('./configs/debugger.config');

// App
const express = require('express');
const app = express();
app.use(cors(corsOptions));
// Configs
require('./configs/cors.config')(app);
require('./configs/middleware.config')(app);
require('./configs/passport.config')(app);

// Routes index
require('./routes')(app);

module.exports = app;
