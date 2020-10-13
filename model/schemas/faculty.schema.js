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
    decano:{
        type: "String",
        require: true
    }
});
/**exportando schema */
module.exports =courseSchema;