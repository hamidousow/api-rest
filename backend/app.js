const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/Product')

mongoose.connect('mongodb+srv://user-test:motdepasse@cluster0.6fhsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('connexion à mongoose reussie'))
        .catch(() => console.log('connexion échouée'))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/products' , (req, res, next) => {
    delete req.body._id;
    const product = new Product ({
        ...req.body
    })
    thing.save()
    .then(() => {
        res.status(201).json({message: 'produit ajouté'})
    })
    .catch(error => {
        res.status(201).json({error})
    });
})

app.get('/api/products/:id', (req, res, next) => {
    Product.findOne({ _id: req.params.id})
    .then(product => res.status(200).json(product))
    .catch(error => res.status(404).json({ error }))
})

app.use('/api/products', (req, res, next) => {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }))
})

app.put('/api/products/:id', (req, res, next) => {
    Product.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({message: 'objet bien modifé'}))
    .catch(error => res.status(400).json({ error }))
})

app.delete('/api/products/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ messge: "iobjet supprimé"}))
    .catch(error => res.status(400).json({ error }))
})

module.exports = app;