const Item = require("../models/item")

exports.getItems = function(req, res){
     Item.find({}).then(data => {
        res.json(data)
    })
}

exports.createItem = function(req, res){
     new Item({
        imageURL: req.body.imageURL,
        name: req.body.name,
        description: req.body.des,
        price: req.body.price
    }).save().then(function(data){
        res.json(data)
    })
}