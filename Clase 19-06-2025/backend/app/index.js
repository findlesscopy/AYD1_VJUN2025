const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Importing routes
const userRoutes = require('./routes/userRoutes');

app.use('/AYD1', userRoutes)

module.exports = app;

