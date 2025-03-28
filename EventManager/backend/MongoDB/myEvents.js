const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    eventName : {
        type : String,
        required : true
    },
    eventDate : {
        type : String,
        required : true
    },
    createdBy : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    organizedBy : {
        type : String,
        required : true
    }
})

const MyEVENTS = mongoose.model( "myEvents" , Schema )

module.exports = {
    MyEVENTS
}
