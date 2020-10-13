/**packs */
const CryptoJS = require("crypto-js");
const config= require("config");
const jwt = require("jsonwebtoken");
/**encriacion de contraseña */
exports.EncryptPassword= (password) =>{
    let secretKey= config.get("secretKeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;

};

exports.DescryptPassword = (cryptedPassword) => {
    let secretKey= config.get("secretKeys").cryptojs;
    let bytes  = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    return originalPassword;

};

exports.GenerateToken =(user) =>{
    let secretKey= config.get("secretKeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now()/1000)+config.get("sessionTime"),
        data: {
            username: user.username,
            id: user._id

        }
    }, secretKey);
    return token
};