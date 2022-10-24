const nodemailer = require('nodemailer')

module.exports.email = nodemailer.createTransport({
    host: '',
    port: '',
    auth: {
        user: '',
        pass: '',
    },
})
