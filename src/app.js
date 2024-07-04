const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Coneção ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

module.exports = app;
