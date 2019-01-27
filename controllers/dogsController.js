const Dog = require("../models/dog")

exports.getDogs = function(req, res){
    const dogs = Dog.find({}).then(data => {
        res.json(data)
    })
}

exports.createDog = function(req, res){
    const dog = new Dog({
        imageURL: req.body.imageURL,
        type: req.body.type,
        year: req.body.year,
        easyToTrain: req.body.easyToTrain,
        intelligence: req.body.intelligence,
        lifeSpan: req.body.lifeSpan
    }).save().then(function(data){
        res.json(data)
    })
}