var mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    Tasks: {type: String, required: true, max: 100},
    Description: {type: String, required: true},
    Completed: {type: Boolean, required: false, default: true}
});

module.exports = mongoose.model('Product', ProductSchema);