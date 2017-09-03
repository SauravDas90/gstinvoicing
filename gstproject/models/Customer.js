var mongoose = require('mongoose');
var CustomerInfoSchema = mongoose.Schema({
    CustomerID : {
        type : String,
        required : true
    },
    CustomerGST : {
        type : String
		required : true
    },

	  CustomerName : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('CustomerInfo',CustomerInfoSchema);