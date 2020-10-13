
const controller = require("../controller/logic/course.controller");
exports.courseRoutes = (app) =>{
    console.log("Cargando rutas de cursos");
    app.get("/course",(req, res, next)=>{
        controller.getAll(req, res, next);
    });
    
    app.post("/course",(req, res, next)=>{
        console.log("Registrando curso");
        controller.createCourse(req, res, next);
    });;
    app.put("/course",(req, res, next)=>{
        controller.updateCourse(req, res, next);
    });
    app.delete("/course",(req, res, next)=>{
        controller.deleteCourse(req, res, next);
    });
};