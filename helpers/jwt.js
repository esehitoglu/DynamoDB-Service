const expressJwt = require('express-jwt')
const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"

function jwt(){
    return expressJwt({secret,algorithms:['HS256']}).unless({
        path : [
            '/api/user/login' // bizim izin verdiğimiz yol , bu yola erişim var
        ]
    })
}

module.exports = jwt
