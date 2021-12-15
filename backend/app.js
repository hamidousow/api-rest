const express = require('express');

const app = express();

app.use('/api/stuff', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use('/api/stuff' , (req, res, next) => {
    const stuff = [
        {
            message: "c'est bon ca fonctionne"
        }
    ]
    res.status(200).json(stuff)
})

module.exports = app;