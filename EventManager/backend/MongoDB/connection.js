const mongoose = require("mongoose")

async function Connect_MongoDB(){
    await mongoose.connect( "mongodb://127.0.0.1:27017/Innova" )
    .then( () => {
        console.log("MongoDB connected")
    } )
    .catch( () => {
        console.log("Some Error Occured")
    } )
}

module.exports = {
    Connect_MongoDB
}
