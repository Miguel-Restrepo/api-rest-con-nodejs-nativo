/**packages */
const mongoose =require("mongoose");
const validator = require("mongoose-unique-validator");
/**creacion de esquema */
const teacherSchema =new  mongoose.Schema({
    document:{
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
    office:{
        type: "String",
        require: true
    },
    id_departament:{
        type: "String",
        require: true
    }
});
/**exportando schema */
teacherSchema.plugin(validator);
module.exports =teacherSchema;