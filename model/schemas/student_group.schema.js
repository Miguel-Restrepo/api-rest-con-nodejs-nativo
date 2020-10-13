/**packages */
const mongoose =require("mongoose");

/**creacion de esquema */
const studentGroupSchema =new  mongoose.Schema({
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        require: true
    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        require: true
    }
});
/**exportando schema */
module.exports =studentGroupSchema;