/**dto */
const facultyDto = require("../../model/dto/faculty.dto");
const config = require("config");
const helper = require("../helpers/general.helpers");


exports.createFaculty = (req, res, next)=>{
    let facultyo ={
        code: req.body.code,
        name: req.body.name,
        decano: req.body.decano
        
    };
    //console.log("creando courso");
    facultyDto.create(facultyo, (err, data)=>{
        if(err){
      
            console.log("No se pudo crear la faculta");
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            
            
        }
        console.log("se creo con exito");
        
        
    });
};


exports.updateFaculty=(req, res, next)=>{
    let facultyo ={
        code: req.body.code,
        name: req.body.name

    };
    facultyDto.update({_id: req.body.id}, facultyo, (err, data)=>{
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
  
    facultyDto.update({},  (err, data)=>{
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




exports.deleteFaculty= ()=>{
    facultyDto.delete({_id: req.body.id},  (err, data)=>{
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