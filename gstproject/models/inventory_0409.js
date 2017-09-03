var mongoose = require('mongoose');
var InventorySchema = mongoose.Schema({
    ProductID : {
        type : String,
        required : true
    },
    ProductName : {
        type : String
		required : true
    },
    ProductDesc : {
        type : String,
        required : true
    },
    HSN : {
        type : String,
        required : true
    },
    Quantity : {
        type : String,
        required : true
    },
	  Unit : {
        type : String,
        required : true
    },

	   Rate : {
        type : String,
        required : true
    },
	   BatchNo : {
        type : String,
        required : true
    },
		PurchaseDate : {
        type : String,
        required : true
    }
	
});
module.exports = mongoose.model('Inventory',InventorySchema);