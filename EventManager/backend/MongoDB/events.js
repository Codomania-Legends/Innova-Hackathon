const mongoose = require("mongoose")

const registrations = new mongoose.Schema( {
    name : { type : String },
    enrollmentNo : { type : String },
    department : { type : String },
    email : { type : String }
} )

const Schema = new mongoose.Schema(
    {
        eventName : {
            type : String,
            required : true
        },
        createBy : {
            type : String,
            required : true
        },
        eventDate : {
            type : String,
            required : true
        },
        department : {
            type : String,
            required : true
        },
        Registrations : [ registrations ]
    } , { timestamps : true }
)
const EVENTS = mongoose.model( "events" , Schema )

module.exports = { EVENTS }
