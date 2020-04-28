const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect('mongodb://192.168.0.103:27017/nodeapi', options);

requireDir('./src/models');

app.use('/api', require('./src/routes'))

app.listen(3001);