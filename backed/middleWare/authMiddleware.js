const jwt = require("jsonwebtoken");
exports.authMiddleware = async(req,res,next)=>{
    try {
        const authHeader = req.header("Authorization");
        if(!authHeader){
            return res.status(401).json({
                message:"Authorization header not provided"
            })
        };

        const parts = authHeader.split(" ");

        if(parts.length !==2 || parts[0]!=="Bearer"){
            return res.status(400).json({
                message:"Invalid authorization format"
            })
        };

        const token = parts[1];

        const decoded = await jwt.verify(token,
            process.env.JWT_SECRET
        );

        req.user =decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid or expired token"
        })
    };
};



