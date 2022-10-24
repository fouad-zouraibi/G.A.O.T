const jwt = require('jsonwebtoken')
const token = '6bef0de6cd7f9366adb92702252a1a6a330e69'

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token)
        return res.status(401).send({
            ok: false,
            error: 'Access denied. No token provided',
        })

    try {
        req.user = jwt.verify(token, token)
    } catch {
        return res.status(401).send({
            ok: false,
            error: 'Token expired',
        })
    }
    next()
}
