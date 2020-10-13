
const controller = require("../controller/logic/teacher.controller");
exports.teacherRoutes = (app) =>{
    console.log("Cargando rutas de estudiantes");
    app.get("/teacher",(req, res, next)=>{
        controller.getAll(req, res, next);
    });
    app.get("/teacher/byDocument/:document",(req, res, next)=>{
        console.log("Profesor encontrado por documento");
        controller.getByDocument(req, res, next);
    });
    app.post("/teacher",(req, res, next)=>{
        console.log("Registrando profesor");
        controller.createTeacher(req, res, next);
    });;
    app.put("/teacher",(req, res, next)=>{
        controller.updateTeacher(req, res, next);
    });
    app.delete("/teacher",(req, res, next)=>{
        controller.deleteTeacher(req, res, next);
    });
};