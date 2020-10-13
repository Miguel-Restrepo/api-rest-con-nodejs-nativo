
module.exports = (req, res, next) => {
    console.log("middleware funcionando ");
    console.log(`Ip client: ${req.connection.remoteAddress}`);
    next();
};
