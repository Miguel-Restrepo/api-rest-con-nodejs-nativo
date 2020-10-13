/**dto */
const teacherDto = require("../../model/dto/teacher.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helpers");
const notHelper = require("../helpers/notification.helper");

exports.createTeacher = (req, res, next)=>{
    let tach ={
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        office: req.body.office,
        departament: req.body.departament

    };
    teacherDto.create(tach, (err, data)=>{
        if(err){
            console.log("Eliminando estudiante, por no creacion de user");
            teacherDto.delete({_id: data._id}, (err, data)=>{
                console.log("eliminando estudiante por user");
            });
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            
            
        }
        let r = config.get("roles").teacher;
        let user = {
            name: tach.name,
            lastname: tach.lastname,
            username: tach.document,
            password: helper.EncryptPassword(req.body.password),
            role: r
        };
        userDto.create(user, (err, u) =>{
            if(err){
                return res.status(400).json(
                    {
                        error: err
                    }
                );
                
            }
            notHelper.sendSMS(tach.phone);
                res.status(201).json(
                    {
                        info: data
                    }
                );
        });
    });
};


exports.updateTeacher=(req, res, next)=>{
    let tach ={
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        office: req.body.office,
        departament: req.body.departament

    };
    teacherDto.update({_id: req.body.id}, tach, (err, data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
       if(req.body.olddocument)
       {
        let r = config.get("roles").teacher;
        let user = {
            name: tach.name,
            lastname: tach.lastname,
            username: tach.document,
            password: helper.EncryptPassword(req.body.password),
            role: r
        };
        userDto.update({document: user.username},user, (err, u) =>{
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
        res.status(201).json(
            {
                info: data
            });
            
        
    });
};


exports.getAll=(req, res, next)=>{
  
    teacherDto.update({},  (err, data)=>{
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


exports.getByDocument=(req, res, next)=>{
  
    teacherDto.getByDocument({document: req.params.document},  (err, data)=>{
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

exports.deleteTeacher= ()=>{
    teacherDto.delete({_id: req.body.id},  (err, data)=>{
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