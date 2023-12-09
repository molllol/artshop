const jwt = require("jsonwebtoken");

//Check if token is still valid
const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err,user) => {
            if(err) res.status(403).json("Invalid token");
            req.user = user;
            next();
        });  

    } else {
        return res.status(401).json("You can't do that");
        }
};

//Check if it the right user
const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,() => {
        if(req.user.id === req.params.id || req.user.iAdmin){
            next()
        }else{
            res.status(403).json("unidentified user")
        }    
    });
};

//Check if it is Admin
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=> {
        if(req.user.isAdmin){
            next()
        } else {
            res.status(403).json("Not Admin")
        }    
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };