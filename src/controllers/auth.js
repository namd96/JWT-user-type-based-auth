var express = require('express');
var router = express.Router()
var app = express();
const bodyParser = require('body-parser');

var authenticator = require('../services/authenticator')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/auth/login', function (req, res) {
    console.log("login called ")
    var body = req.body;

    authenticator.createToken({ un: req.body.un, pw: req.body.pw , type : req.body.type})

    console.log("login called ")
    res.json({ login: true })
})

module.exports = router
