const Story = require("../models/story")

exports.getStories = function(req, res){
    Story.find({}).then(data => {
        res.json(data)
    })
}

exports.createStory = function(req, res){
    new Story({
        nick: req.body.nick,
        text: req.body.text,
    }).save().then(function(data){
        res.json(data)
    })
}

exports.deleteStory = function(req,res){
    const id = req.params.id;
    Story.findByIdAndDelete(id).then(function(data){
        res.send({message: 'Story deleted succesfully'})
    })

}

exports.updateStory = function(req, res){
    const id = req.params.id;
    console.log(req.body)
    Story.findOneAndUpdate({_id: id}, {text:req.body.text})
        .then(function(data){
            res.json(data)
        })
}
