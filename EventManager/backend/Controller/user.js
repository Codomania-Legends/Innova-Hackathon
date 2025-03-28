const { USER } = require("../MongoDB/user")
const { CheckForAnotherUser } = require("../Service/user")

async function handleSignupReqRes( req , res ) {
    if( 
        !req.body.username,
        !req.body.password
    ) return res.json({msg : "Body is required"})
    const { username , password } = req.body
    const check = await CheckForAnotherUser(username)
    if( check ) return res.json({msg : "user already exists"})
    const result = await USER.create( {
        username : username,
        password : password
    } )
    if( result.length == 0 ) return res.json({msg : "Some Error Occured"})
    return res.json({msg : "User Created" , redirect : true})
}

async function handleLoginReqRes( req , res ) {
    if( 
        !req.query.username ||
        !req.query.password
    ) return res.json({msg : "Parameters is required"})
    const { username , password } = req.query
    const check = await CheckForAnotherUser(username , password)
    if( check ) return res.json( { msg : "User Found" , redirect : true } )
    else return res.json( { msg : "User Not Found" , redirect : false } )
}

module.exports = {
    handleSignupReqRes,
    handleLoginReqRes
}
