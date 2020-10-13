const mongoose = require("mongoose");

/**using schema */
const schema =require("../schemas/departament.schema");

schema.static={
    create: function(data,cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query, cb){
        this.find(query,cb);
    },
  
    update: function (query, data, cb){
        this.findOneAndUpdate(query, {$set: data},{new: true}, cb);

    },
    delete: function(query, cb){
        this.findOneAnddelete(query);
    }
};


const dto=mongoose.model("coll_departaments",schema);
module.exports= dto;