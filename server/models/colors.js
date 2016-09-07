var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var colorSchema = new Schema({
  value: { type: String, required: true}
});

var colors = mongoose.model('Colors', colorSchema);

module.exports = colors;
