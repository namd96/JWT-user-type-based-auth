var express = require('express');
var app = express();
// var auth = require('./auth')
// const io = require('socket.io')();
var http = require('http').createServer(app);
// var io = require('socket.io')(http);
var cors = require('cors')
// var con = require('./conn')
var AuthRouter = require('./controllers/auth')
var FridgeRouter = require('./controllers/fridgeRouter')
var CupboardRouter = require('./controllers/cupboardRouter')
var authenticator = require('./services/authenticator')
var GuestOrFamily = require('./policies/guestOrFamily')
var Family = require('./policies/family')
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// to do
/* 
1. listen to an express server
2. Route /login/* : No auth
3. Route /fridge/* : policy guest or family
4. Route /cupboard/* : policy family
5. Route * : authenticator middleware
*/
app.use(AuthRouter)
app.use(authenticator.validateMiddleware)
app.use('/fridge', GuestOrFamily)
app.use( FridgeRouter)
app.use('/cupboard', Family)
app.use(CupboardRouter)
// app.use('/cupboard', CupboardRouter)


http.listen(8000, function () {
    console.log("I am running on 8000")
});