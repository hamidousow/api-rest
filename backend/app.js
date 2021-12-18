const express = require('express')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user-test:<motdepasse>@cluster0.6fhsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => { console.log('connexion a mongo reussie')})
    .catch(() => console.log('connexion a mongo échouée'))

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        message: 'objet créé'
    })
})

app.use((req, res) => {
    res.json({message: "j'ai les clés de l'appart grosse merde"})
})

module.exports = app;