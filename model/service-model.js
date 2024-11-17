const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    

});

const Service = new mongoose.model("Service",serviceSchema);

module.exports = Service;