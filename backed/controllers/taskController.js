const Task = require("../models/task");
const Project = require("../models/project")
exports.createTask = async(req,res,next) =>{
    try {
        const{project,title,description,status,priority,dueDate,assignee} = req.body;
        const projectExists = await Project.findOne(
            {
             _id:project,
             owner:req.user
            }
        );

        if(!projectExists){
            return res.status(404).json({
                message:"project does not exist!"
            });
        }

        const memberExists = projectExists.members.some(member=>member.toString()===assignee);
        if(!memberExists){
            return res.status(403).json({
                message:"The assignee is not a member of the project"
            })
        }
        const task = await Task.create(            
            {
                project,
                title,
                description,
                status,
                priority,
                dueDate,
                assignee,                
            },
                        
        );
        res.status(201).json({
            message:"Task created successfully",
            task
        });
    } catch (error) {
        next(error)
    }
};

//get all tasks of a project
exports.getTasks =async(req,res,next)=>{
    try {
        const {projectId} =req.params;
        const projectExists = await Project.findOne({
            _id:projectId,
            owner:req.user
        });

        if(!projectExists){
            return res.status(404).json({
                message:"project does not exist!"
            });
        };

        const tasks = await Task.find(
            {                
                project:projectId,
               
            }
        );
        if(tasks.length===0){
            return res.status(404).json({
                message:"no task found"
            })
        };

        res.status(200).json({
            tasks
        });
    } catch (error) {
        next(error)
    }
};

//Get task by id
exports.getTaskById = async(req,res,next) =>{
    try {
        const {projectId} = req.params;

        const projectExists = await Project.findOne(
            {
                owner:req.user,
                _id:projectId

            }
        );

        if(!projectExists){
            return res.status(400).json({
                message:"Project does not exist"
            })
        }

        const task = await Task.findOne({
            _id:req.params.id,
            project:projectId
        });

        if(!task){
            return res.status(404).json({
                message:"Task not found"
            })
        };
        res.status(200).json(task)

    } catch (error) {
        next(error)
    }
};



exports.updateTask =async(req,res,next)=>{
    try {
        const {projectId} = req.params;
        const{title,description,status,priority,dueDate,assignee}=req.body;

        //verify project ownership
        const projectExits = await Project.findOne(
            {
                _id:projectId,
                owner:req.user
            }
        );

        if(!projectExits){
            return res.status(404).json({
                message:"Project does not exist"
            })
        };

        //Verify assignee is a project member
        const memberExists = projectExists.members.some(member=>member.toString()===assignee);

        if(!memberExists){
            return res.status(403).json({
                message:"The assignee is not a member of the project"
            })
        };            

        //Update task belonging to this project
        const updatedTask = await Task.findOneAndUpdate(
            {
                project:projectId,
                _id:req.params.id
                
            },
            {
                title,
                description,
                status,
                priority,
                dueDate,
                assignee                
            },
            {
                new:true,
                runValidators:true
            }
        );

        if(!updatedTask){
            return res.status(404).json({
                message:"Task not found"
            })
        };

        res.status(200).json({
            message:"Task updated successfully",
            updatedTask
        }
    );

    } catch (error) {
        next(error)
    }
};

//Delete task
exports.deleteTask = async(req,res,next) =>{
    try {
        const {projectId} = req.params;

        const projectExists = await Project.findOne(
            {
                _id:projectId,
                owner:req.user
            }
        );
        if(!projectExists){
            return res.status(404).json({
                message:"Project does not exist"
            })
        };        

        const  deletedTask = await Task.findOneAndDelete(
            {
                project:projectId,
                _id:req.params.id
            },            
        );

        if(!deletedTask){
            return res.status(404).json({
                message:"Task not found"
            })
        };

        res.status(200).json({
            message:"Task deleted successfully",
            deletedTask
        });
    } catch (error) {
        next(error)
    }
};