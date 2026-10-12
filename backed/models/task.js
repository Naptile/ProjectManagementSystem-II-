const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    assignee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    title:{
        type:String,
        required:true,
        trim:true        
    },

    description:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        enum:["Assigned","In Progress","Review","Approved","Completed"],
        required:true,
        default:"Assigned",
        type:String
    },

    priority:{
        enum:["Low","Medium","High"],
        required:true,
        default:"Medium",
        type:String
    },

    dueDate:{
        type:Date,
        required:true
    }
},{timestamps:true});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;