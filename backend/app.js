const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.json({ message: 'votre requête a bien été reçue'})
})

module.exports = app;