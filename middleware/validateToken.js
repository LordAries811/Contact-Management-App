const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next) => {
    let authHeader = req.headers.Authorization || req.headers.authorization;
    //console.log(authHeader);
    let token;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err,decoded) => {
            if(err){
                return res.status(401).json({message: "Invalid User authorization"});
            }

            req.user = decoded.user;
            next();
        });
        //console.log(token);
        if(!token){
            res.status(401).json({message: "Token missing"});
        }
    }
});

module.exports = validateToken;