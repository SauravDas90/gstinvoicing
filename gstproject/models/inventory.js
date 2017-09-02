var Item = require('./item');
var mongoose = require('mongoose');
var InventorySchema = mongoose.Schema({
    user_id : {
        type :  String,
        required : true
    },
    items : [Item]
});
module.exports = mongoose.model('Inventory',InventorySchema);