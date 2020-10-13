
const controller = require("../controller/logic/departament.controller");
exports.departamentRoutes = (app) =>{
    console.log("Cargando rutas de cursos");
    app.get("/departament",(req, res, next)=>{
        controller.getAll(req, res, next);
    });
    
    app.post("/departament",(req, res, next)=>{
        console.log("Registrando facultad");
        controller.createDepartament(req, res, next);
    });;
    app.put("/departament",(req, res, next)=>{
        controller.updateDepartament(req, res, next);
    });
    app.delete("/departament",(req, res, next)=>{
        controller.deleteDepartament(req, res, next);
    });
};