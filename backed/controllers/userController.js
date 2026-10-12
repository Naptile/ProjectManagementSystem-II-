const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async(req,res,next) =>{
    try {
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                message:"user with this  email already exists"
            });
        };
        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });

        res.status(201).json({
            message:"Account created successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        next(error)    
    }
};


exports.loginUser = async(req,res,next)=>{
    const {email,password} = req.body;
    try {
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(404).json({
                message:"User does not exists"
            })
        };

        const isMatch = await bcrypt.compare(password,userExists.password);

        if(!isMatch){
            return res.status(400).json({
                message:"Invalid credentials"
            })
        };

        const token = jwt.sign(
                   
             {id:userExists._id},
                process.env.JWT_SECRET,
                {expiresIn:"1d"}
            
        )

        res.status(200).json({
            message:"Login successfull",
            token
        });

    } catch (error) {
        next(error)
    }
};

exports.getCurrentUser = async(req,res,next) =>{
    try {
        const user = await User.findById(req.user).select("-password");
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        };
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }

};