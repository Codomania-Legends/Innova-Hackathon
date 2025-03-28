const { EVENTS } = require("../MongoDB/events")

async function handleAddEvent( req , res ) {
    if( 
        !req.body.eventName ||
        !req.body.username ||
        !req.body.eventDate ||
        !req.body.department
    ) return res.json({msg : "Body Required"})
    const { eventName , eventDate , username , department } = req.body
    const checkForSame = await EVENTS.find( { 
        "eventName" : eventName, 
        "eventDate" : eventDate , 
        "department" : department
    } )
    console.log(checkForSame)
    if( checkForSame.length != 0 ) return res.json({msg : "Event already exists"})
    const result = await EVENTS.create({
        eventName,
        createBy : username,
        eventDate,
        department,
        Registrations : []
    }) 
    if( result.length == 0 || !result ){
        res.json({msg : "Some error occured"})
    }
    else res.json({msg : "Event Set"})
}

async function handleGetAllEvents( req , res ) {
    const result = await EVENTS.find()
    if( !result ) return res.json({msg : "Some error occured"})
    else return res.json({msg : "Got It" , events : result})
}

async function handleGetSpecificEvent( req , res ) {
    if( !req.params.specificEvent ) return res.json({msg : "Body is required"})
    const { specificEvent } = req.params 
    const result = await EVENTS.findOne( { eventName : specificEvent } )
    if( !result ) return res.json({msg : "No event found"})
    else return res.json({ msg : "Event Found" , event : result })
}

module.exports = {
    handleAddEvent,
    handleGetAllEvents,
    handleGetSpecificEvent
}
