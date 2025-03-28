const express = require("express")
const { handleSignupReqRes, handleLoginReqRes } = require("../Controller/user")
const UserRouter = express.Router()

UserRouter.post( "/signup" , handleSignupReqRes  )
UserRouter.get( "/login" , handleLoginReqRes  )

module.exports = {
    UserRouter
}
