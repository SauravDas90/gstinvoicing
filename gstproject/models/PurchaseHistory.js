var mongoose = require('mongoose');
var PurchaseHistorySchema = mongoose.Schema({
    ProductID : {
        type : String,
        required : true
    },
    PurchaseDate : {
        type : String
		required : true
    },
    SalesDate : {
        type : String,
        required : true
    },
    DistributorID : {
        type : String,
        required : true
    },
    Unit : {
        type : String,
        required : true
    },
	  Quantity : {
        type : String,
        required : true
    },
	  BatchNo : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('PurchaseHistory',PurchaseHistorySchema);