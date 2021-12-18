const express = require('express')
const app = express();

app.use((req, res) => {
    res.json({message: "j'ai les clés de l'appart grosse merde"})
})

module.exports = app;