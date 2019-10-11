var express = require('express');
var router = express.Router()
var app = express();
const bodyParser = require('body-parser');

var authenticator = require('../services/authenticator')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("cupboard called ")
router.get('/cupboard', function (req, res) {
    console.log("cupboard called ")
    var body = req.body;

    console.log("cupboard called ")
    res.json({ cupboardPrivileges: true })
})

module.exports = router
