/**dto */
const courseDto = require("../../model/dto/course.dto");
const config = require("config");
const helper = require("../helpers/general.helpers");


exports.createCourse = (req, res, next)=>{
    let courseo ={
        code: req.body.code,
        name: req.body.name
        
    };
    //console.log("creando courso");
    courseDto.create(courseo, (err, data)=>{
        if(err){
      
            console.log("No se pudo crear el curso");
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            
            
        }
        console.log("se creo con exito");
        
        
    });
};


exports.updateCourse=(req, res, next)=>{
    let courseo ={
        code: req.body.code,
        name: req.body.name

    };
    courseDto.update({_id: req.body.id}, courseo, (err, data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
       
                res.status(201).json(
                    {
                        info: data
                    }
                );
        });

       }
       


exports.getAll=(req, res, next)=>{
  
    courseDto.update({},  (err, data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
       
        res.status(200).json(
            {
                info: data
            });
            
        
    });
};




exports.deleteCourse= ()=>{
    courseDto.delete({_id: req.body.id},  (err, data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
       
        res.status(204).json();
            
        
    });
};