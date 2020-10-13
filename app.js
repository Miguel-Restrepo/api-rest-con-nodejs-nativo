/** packs */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** configuracion de la app */
const app= express();
const port = config.get("server-port");
//const port = 3000;
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
const periodSchema = require("./model/schemas/period.schema");
app.use(ipFn);
app.use(function (req, res, next) {
    console.log(`Ip client: ${req.connection.remoteAddress}`);
    next();
  });
/**metodos */
app.get("/", (req, res, next)=>{
    res.send("bienvenido a la aplicacion academinca rest api");
});
// token middleawer
tkfm = require("./middleware/verifyToken");
app.use(tkfm);


//RUTAS USUARIOS
const userRoutes = require("./routes/user.routes").userRoutes;
userRoutes(app); 

//RUTAS ESTUDIANTES
const studentRoutes = require("./routes/student.routes").studentRoutes;//aca errror
//app.use(studentRoute);//LINEA ORIGEN DEL PROBLEMA
studentRoutes(app);

//RUTAS PROFESORES
const teacherRoutes = require("./routes/teacher.routes").teacherRoutes;
teacherRoutes(app);

//RUTAS PERIODOS
const periodRoutes = require("./routes/period.routes").periodRoutes;
periodRoutes(app);

//RUTAS CURSOS
const courseRoutes =require("./routes/course.routes").courseRoutes;
courseRoutes(app);

//RUTAS FACULTADES
const facultyRoutes =require("./routes/faculty.routes").facultyRoutes;
facultyRoutes(app);

//RUTAS DEPARTAMENTOS
const departamentRoutes =require("./routes/departamentRoutes").departamentRoutes;
departamentRoutes(app);



app.listen(port, ()=>{
    console.log("servidor corriendo")
});




//USAR PARA NODEMON npm run dev