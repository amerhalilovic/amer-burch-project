var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({

      imageURL:String,
      name:String,
      description:String,
      price:Number

})
module.exports = mongoose.model('Items', itemSchema)