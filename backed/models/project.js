const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    name:{
        type:String,
        required:true,
        trim:true,
    },

    description:{
        type:String,
        required:true,
        trim:true,
    },

    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],

    status:{
        enum:["Assigned","Planning","Active","Completed","Archived"],
        required:true,
        default:"Planning",
        type:String
    }

},{timestamps:true});

const Project = mongoose.model("Project",projectSchema);

module.exports = Project;