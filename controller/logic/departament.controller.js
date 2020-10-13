/**dto */
const departamentDto = require("../../model/dto/departament.dto");
const config = require("config");
const helper = require("../helpers/general.helpers");


exports.createDepartament = (req, res, next)=>{
    let depa ={
        code: req.body.code,
        name: req.body.name,
        id_faculty: req.body.id_faculty,
        director: req.body.director
        
    };
    
    departamentDto.create(depa, (err, data)=>{
        if(err){
      
            console.log("No se pudo crear el departamento");
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            
            
        }
        console.log("se creo con exito");
        
        
    });
};


exports.updateDepartament=(req, res, next)=>{
    let depa ={
        code: req.body.code,
        name: req.body.name,
        id_faculty: req.body.id_faculty,
        director: req.body.director
        
    };
    departamentDto.update({_id: req.body.id}, depa, (err, data)=>{
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
  
    departamentDto.update({},  (err, data)=>{
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




exports.deleteDepartament= ()=>{
    departamentDto.delete({_id: req.body.id},  (err, data)=>{
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