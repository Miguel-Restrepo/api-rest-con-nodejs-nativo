/**packages */
const mongoose =require("mongoose");

/**creacion de esquema */
const courseSchema =new  mongoose.Schema({
    code:{
        type: "String",
        require: true
    },
    name:{
        type: "String",
        require: true
    },
    id_faculty:{
        type: "String",
        require: true
    },
    director:{
        type: "String",
        require: "String"
    }
});
/**exportando schema */
module.exports =courseSchema;