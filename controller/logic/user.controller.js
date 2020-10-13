/**dto */
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helpers")
//const notHelper = require("../helpers/notification.helper")

exports.login = (req, res, next)=>{
    let pass = helper.DescryptPassword(req.body.password);

    userDto.login({username: req.body.username}, (err, data)=>{
    if (err){
        return res.status(400).json(
            {
                error: err
            }
        );
    }
    if(data.length >0){
        let pass = helper.DescryptPassword(data[0].password);
       // console.log("contraseña en base de datos es : "+ pass);
        if(req.body.password ==pass){
            tk = helper.GenerateToken(data[0]);
            res.status(200).json(
                {
                    token: tk
                }
            );

        }else{
        res.status(400).json(
            {
                info: "usuario o contraseña invalidos"
            }
        );
    }
    }

});
};


exports.updateUser=(req, res, next)=>{
    let std ={
        code: req.body.code,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career

    };
    studentDto.update({_id: req.body.id}, std, (err, data)=>{
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
            });
            
        
    });
};


exports.getAll=(req, res, next)=>{
  
    userDto.getAll( {},  (err, data)=>{
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


exports.getByCode=(req, res, next)=>{
  
    studentDto.getByCode({code: req.params.code},  (err, data)=>{
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

exports.deleteUser= ()=>{
    studentDto.delete({_id: req.body.id},  (err, data)=>{
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