const mongoose = require("mongoose");

const EnseignatSchema = new mongoose.Schema({
    name:{
        type : String ,
        required :true
    },
    email:{
        type : String ,
        required :true ,
        unique : true
    },
    password:{
        type : String ,
        required :true,
        minlength: 8
    },

    phone:{
        type: Number,
    }
});

module.exports = mongoose.model("Enseignant",EnseignatSchema);
