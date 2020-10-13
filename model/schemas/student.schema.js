/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
/**creacion de esquema */
const studentSchema =new  mongoose.Schema({
    code:{
        type: "String",
        require: true,
        unique:true
    },
    name:{
        type: "String",
        require: true
    },
    lastname:{
        type: "String",
        require: true
    },
    email:{
        type: "String",
        require: true,
        unique:true
    },
    phone:{
        type: "String",
        require: true
    },
    career:{
        type: "String",
        require: true
    }
});
/**exportando schema */
studentSchema.plugin(validator);
module.exports =studentSchema;