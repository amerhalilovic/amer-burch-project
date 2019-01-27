const Event = require("../models/event")

exports.getEvents = function(req, res){
    const events = Event.find({}).then(data => {
        res.json(data)
    })
}

exports.createEvent = function(req, res){
    console.log(req.body)
    const event = new Event({
        organisator: req.body.organisator,
        adresa: req.body.adresa,
        date: new Date(req.body.date)
    }).save().then(function(e){
        res.json({event: e})
    })
}