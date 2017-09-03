var mongoose = require('mongoose');
var DistributorSchema = mongoose.Schema({
    DistributorID : {
        type : String,
        required : true
    },
    DistributorGST : {
        type : String
		required : true
    },

	  DistributorName : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('Distributor',DistributorSchema);