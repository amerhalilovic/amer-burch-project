var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventSchema = new Schema({

      organisator:String,
      adresa:String,
      date:Date

})
module.exports = mongoose.model('Event', eventSchema)