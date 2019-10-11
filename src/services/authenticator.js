let secret = require('../../jwtSecret')
let timeOut = 2*3600*1000;
module.exports = {
    async validateMiddleware(req, res, next){
        // to do
        /* 
        verify req.headers.authorization

        if(verified) next() 
        else res.json unauthorized

        */
    },

    createToken(payload){
        let signedToken;
        /* create a signed token from payload  */
        return signedToken
    }
 }