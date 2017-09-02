var mongoose = require('mongoose');
var ItemSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    midddescription : {
        type : String
    },
    type : {
        type : String,
        required : true
    },
    hsn : {
        type : String,
        required : true
    },
    rot : {
        type : String,
        required : true
    },
    saleprice : {
        type : Number,
        required : true
    },
    purchaseprice : {
        type : Number,
        required : true
    },
    quantity : {
        type: Number,
        required : true
    },
    unit : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('Item',ItemSchema);