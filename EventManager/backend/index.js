const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const { UserRouter } = require("./Routes/user")
const { EventRoute } = require("./Routes/event")
const app = express()
const PORT = 5000

app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )
Connect_MongoDB()
app.use( "/user" , UserRouter )
app.use( "/event" , EventRoute )


app.listen( PORT , () => console.log(`Server Started at http://localhost:${PORT}`) )
