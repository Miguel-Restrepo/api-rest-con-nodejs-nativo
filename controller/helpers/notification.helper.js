
exports.sendSMS = async(phone)=>{
    let code= Math.random(10);
    console.log(`se ha enviado un codigo ${code} al numero ${phone}`);
}