const req = require('express/lib/request')
const cardModel = require('../../models/boutique/card.model')

// ***************** function add card *****************
module.exports.add = (req) => {
    return new Promise((resolve, reject) => {
        let body = req.body
        if (body) {
            commandeDB = new cardModel(body)
            commandeDB.save((err, data) => {
                if (!err) {
                    resolve({
                        response: true,
                        message: 'Card added successfully',
                        data: data,
                    })
                } else {
                    resolve({
                        response: false,
                        message: 'You have missed data',
                        data: err,
                    })
                }
            })
        } else {
            reject()
        }
    })
}

// ***************** function update card *****************
module.exports.update = (req) => {
    return new Promise((resolve, reject) => {
        let body = req.body
        if (body) {
            cardModel
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

// ***************** function delete card *****************
module.exports.delete = (req) => {
    return new Promise((resolve, reject) => {
        cardModel.findOneAndDelete(
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
                            data != null ? 'Deleted card' : 'card doesnt exist',
                        data: data,
                    })
                }
            }
        )
    })
}

// ***************** Function get card by id  *****************
module.exports.get = (id) => {
    return new Promise((resolve, reject) => {
        cardModel
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

// ***************** function list card *****************
module.exports.getList = () => {
    return new Promise(async (resolve, reject) => {
        let cards = await cardModel.find({})
        let condition = cards.length > 0
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: cards,
        })
    })
}
