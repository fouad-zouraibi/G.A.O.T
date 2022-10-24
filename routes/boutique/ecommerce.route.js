var express = require('express')
var router = express.Router()
const produitController = require('../../controllers/boutique/produit.controller')
const cardController = require('../../controllers/boutique/card.controller')
const categorieProduitController = require('../../controllers/boutique/categorie.controller')

router.get('/', (req, res) => {
    produitController
        .getList(req)
        .then((data) => {
            //res.json(data);
            res.render('pages/homepage', { data: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    //res.render('pages/homepage')
})

router.get('/products', (req, res) => {
    produitController
        .getList(req)
        .then((data) => {
            //res.json(data);
            console.log('data')
            console.log(data)

            console.log('data.data')
            console.log(data.data)

            console.log('data.data.titre')
            console.log(data.data.titre)

            res.render('pages/productslist', { data: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    //res.render('pages/homepage')
})

router.get('/cart', (req, res) => {
    var produits = {}
    var cards = {}
    cardController
        .getList(req)
        .then((data) => {
            //res.json(data);
            res.render('pages/cartpage', { data: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    //res.render('pages/homepage')
})

router.get('/categories', (req, res) => {
    categorieProduitController
        .getList(req)
        .then((data) => {
            //res.json(data);
            console.log('data.data')
            console.log(data.data)
            console.log('data.data[0]')
            console.log(data.data[0])
            console.log('data.data[0].cat')
            console.log(data.data[0].cat)
            console.log('data.data[0].cat.titre')
            console.log(data.data[0].cat.titre)

            res.render('pages/categorie', { data: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    //res.render('pages/homepage')
})

router.get('/categories/products/:id', (req, res) => {
    produitController
        .getCat(req.params.id)
        .then((data) => {
            //res.json(data);
            console.log('data.data')
            console.log(data.data)
            console.log('data.data[0]')
            console.log(data.data[0])
            console.log('data.data[0].cat')
            console.log(data.data[0].cat)
            console.log('data.data[0].cat.titre')
            console.log(data.data[0].cat.titre)

            res.render('pages/productslist', { data: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    //res.render('pages/homepage')
})

module.exports = router
