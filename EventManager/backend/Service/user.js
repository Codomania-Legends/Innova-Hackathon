const { USER } = require("../MongoDB/user")

async function CheckForAnotherUser( username , password ) {
    if( !username ) return false
    let result = [];
    if( password ){
        result = await USER.find({username : username , password : password})
    }
    else{
        result = await USER.find({username : username})
    }
    if( result.length == 0 ) return false
    else return true
}

module.exports = {
    CheckForAnotherUser
}
