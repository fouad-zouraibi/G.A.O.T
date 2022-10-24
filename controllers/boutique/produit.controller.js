const req = require('express/lib/request')
const produitModel = require('../../models/boutique/produit.model')
const mongoose = require('mongoose')

// ***************** function add produit *****************
module.exports.add = (req) => {
    return new Promise((resolve, reject) => {
        let body = req.body
        if (body) {
            produitDB = new produitModel(body)
            produitDB.image = req.file ? req.file.path : ''
            produitDB.save((err, data) => {
                if (!err) {
                    resolve({
                        response: true,
                        token: null,
                        message: 'Product added successfully',
                        user: data,
                    })
                } else {
                    resolve({
                        response: false,
                        token: null,
                        message: 'You have missed data',
                        user: err,
                    })
                }
            })
        } else {
            reject()
        }
    })
}

// ***************** function update produit *****************
module.exports.update = (req) => {
    return new Promise((resolve, reject) => {
        let body = req.body
        if (body) {
            produitModel
                .findOneAndUpdate({ _id: req.params.id }, body)
                .then((res) => {
                    resolve({
                        response: true,
                        message: 'User modify successfully',
                        data: res,
                    })
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
            reject()
        }
    })
}

// ***************** function delete produit *****************
module.exports.delete = (req) => {
    return new Promise((resolve, reject) => {
        produitModel.findOneAndDelete(
            { _id: req.params.id },
            function (err, data) {
                if (err) {
                    reject({
                        response: false,
                        message: 'error',
                        data: err,
                    })
                } else {
                    resolve({
                        response: data != null,
                        message:
                            data != null
                                ? 'Deleted produit'
                                : 'Produit doesnt exist',
                        data: data,
                    })
                }
            }
        )
    })
}

// ***************** Function get   by id  *****************
module.exports.get = (id) => {
    return new Promise((resolve, reject) => {
        produitModel
            .findOne({ _id: id })
            .then((produit) => {
                condition = false
                if (produit) condition = true
                resolve({
                    response: condition,
                    message: condition ? 'Get data successfully' : 'No data',
                    data: produit,
                })
            })
            .catch((err) => {
                reject({
                    response: false,
                    message: 'No ID provided',
                    data: err,
                })
            })
    })
}
// ***************** Function get   by title  *****************
module.exports.get = (titre) => {
    return new Promise((resolve, reject) => {
        produitModel
            .findOne({ _titre: titre })
            .then((produit) => {
                condition = false
                if (produit) condition = true
                resolve({
                    response: condition,
                    message: condition ? 'Get data successfully' : 'No data',
                    data: produit,
                })
            })
            .catch((err) => {
                reject({
                    response: false,
                    message: 'No ID provided',
                    data: err,
                })
            })
    })
}

// ***************** Function get   by categorie id  *****************
module.exports.getCat = (id) => {
    return new Promise(async (resolve) => {
        console.log('id')
        console.log(id)
        let produits = await produitModel.findOne({ _titre: 'shoes' })
        console.log('produits')
        console.log(produits)
        let condition = produits.length > 0
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: produits,
        })
    })
}

// ***************** function list  *****************
module.exports.getList = (req) => {
    return new Promise(async (resolve) => {
        let produits = await produitModel.find({})
        let condition = produits.length > 0
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: produits,
        })
        /*
    produitModel.paginate({}, {page: parseInt(req.params.page), limit: parseInt(req.params.limit) }, function(err, data) {

        condition = data.total > 0
        if(condition){
            data.docs.forEach((item,index)=>{
                item.image = "http://localhost:3000/"+item.image;
                
                if(index+1 == data.docs.length){
                    resolve({
                        response: condition,
                        message: condition ? 'Get data successfully' : 'No data',
                        data: data
                    })
                }
            })
        }
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: data
        });
    })*/
    })
}
