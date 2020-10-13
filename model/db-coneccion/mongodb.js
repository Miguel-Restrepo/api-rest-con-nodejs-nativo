// paquetes
const mongoose=require("mongoose");
const config= require("config");

const mongodbInfo = config.get("db-connections.mongodb");

//usuario: usuario-rest-academico
//contrasena: Miguel12195
const connStr= `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`

module.exports =() => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () =>{
        console.log("mongodb server connection")
    });
    mongoose.connection.on("disconnected", () =>{
        console.log("mongodb server disconnection")
    });
    mongoose.connection.on("error", () =>{
        console.log("mongodb server connection error")
    });
    mongoose.connection.on("SIGINT", () =>{
        mongoose.connection.close(()=>{
            console.log("mongodb server down!")

        });
        
    });

};