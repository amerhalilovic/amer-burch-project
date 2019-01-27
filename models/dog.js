var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dogSchema = new Schema({

      imageURL:String,
      type:String,
      year:Number,
      easyToTrain:Number,
      intelligence: Number,
      lifeSpan:Number

})
module.exports = mongoose.model('Dog', dogSchema)