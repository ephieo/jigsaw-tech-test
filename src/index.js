const express = require('express');

const errorHandling = require('./errorHandling');

const insightsRouter = require('./routers/insights');

const app = express();

app.use('/insights', insightsRouter);

// handle errors
app.use(errorHandling);

module.exports = app;
