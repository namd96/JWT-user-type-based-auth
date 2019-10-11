var express = require('express');
var router = express.Router()
var app = express();
const bodyParser = require('body-parser');

var authenticator = require('../services/authenticator')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("fridge called ")
router.get('/fridge', function (req, res) {
    console.log("fridge called ")
    var body = req.body;

    console.log("fridge called ")
    res.json({ fridgePrivileges: true })
})

module.exports = router
