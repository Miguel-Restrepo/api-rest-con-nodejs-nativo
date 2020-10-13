/**packages */
const mongoose =require("mongoose");

/**creacion de esquema */
const periodSchema =new  mongoose.Schema({
    year:{
        type: "Number",
        require: true,
        min: 2020,
        max: 2030
    },
    number:{
        type: "Number",
        require: true,
        min: 1,
        max: 2
    },
    current:{
        type: "Boolean",
        require: true,
        defauld: true
    }
});
/**exportando schema */
module.exports =periodSchema;