module.exports = function (req, res, next) {

    if (req.user.type == "family") {// Implement the middleware function based on the options object
        console.log("successfull")
        next()

    } else res.json({ err: true })
}
