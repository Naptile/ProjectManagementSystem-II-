const errorMiddleware = async(err,req,res,next)=>{
    console.error(err.Stack);
    if(err.message==="ValidationError"){
        return res.status(400).json({
            message:"Validation failed"
        })
    };

    if(err.message === "CastError"){
        return res.status(400).json({
            message:"Invalid ID format"
        })
    };
    if(err.status ===11000){
        return res.status(400).json({
            message:"A record with this value already exists"
        })
    };

    res.status(500).json({
        message:"Internal server error"
    })
};

module.exports = errorMiddleware;