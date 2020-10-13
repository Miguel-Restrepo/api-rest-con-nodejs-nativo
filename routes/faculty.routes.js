const controller = require("../controller/logic/faculty.controller");
exports.facultyRoutes = (app) =>{
    console.log("Cargando rutas de cursos");
    app.get("/faculty",(req, res, next)=>{
        controller.getAll(req, res, next);
    });
    
    app.post("/faculty",(req, res, next)=>{
        console.log("Registrando facultad");
        controller.createFaculty(req, res, next);
    });;
    app.put("/faculty",(req, res, next)=>{
        controller.updateFaculty(req, res, next);
    });
    app.delete("/faculty",(req, res, next)=>{
        controller.deleteFaculty(req, res, next);
    });
};