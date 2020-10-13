/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
/**creacion de esquema */
const userSchema =new  mongoose.Schema({
    name:{
        type: "String",
        require: true
    },
    lastname:{
        type: "String",
        require: true
    },
    username:{
        type: "String",
        require: true,
        unique:true
    },
    password:{
        type: "String",
        require: true
    },
    role:{
        type: "Number",
        require: true
    }
});
/**exportando schema */

userSchema.plugin(validator);
module.exports =userSchema;