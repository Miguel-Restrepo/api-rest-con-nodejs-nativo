
const controller = require("../controller/logic/user.controller");
exports.userRoutes = (app) =>{
    console.log("Cargando rutas de usuarios");
    app.get("/user",(req, res, next)=>{
        controller.getAll(req, res, next);
    });
    app.post("/user",(req, res, next)=>{
        controller.login(req, res, next);
    });
};