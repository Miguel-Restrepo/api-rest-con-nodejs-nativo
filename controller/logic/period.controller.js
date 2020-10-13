/**dto */
const periodDto = require("../../model/dto/period.dto");
const config = require("config");
const helper = require("../helpers/general.helpers");
const notHelper = require("../helpers/notification.helper");

exports.createPeriod = (req, res, next)=>{
    let periodo ={
        year: req.body.year,
        number: req.body.number,
        current: req.body.current
        
    };
    //console.log("creando periodo");
    periodDto.create(periodo, (err, data)=>{
        if(err){
      
            console.log("No se pudo crear el periodo");
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            
            
        }
        console.log("se creo con exito");
        
        
    });
};


exports.updatePeriod=(req, res, next)=>{
    let periodo ={
        year: req.body.year,
        number: req.body.number,
        current: req.body.current

    };
    periodDto.update({_id: req.body.id}, periodo, (err, data)=>{
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
  
    periodDto.getAll({},  (err, data)=>{
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




exports.deletePeriod= ()=>{
    periodDto.delete({_id: req.body.id},  (err, data)=>{
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