var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var storiSchema = new Schema({

  nick:String,
  text:String

})
module.exports = mongoose.model('Stori', storiSchema)