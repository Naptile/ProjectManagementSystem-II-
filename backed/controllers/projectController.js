const Project = require("../models/project");

exports.createProject = async(req,res,next) =>{
    try {
        const {name,description,status} = req.body;
        const project = await Project.create({
            owner:req.user,
            name,
            description,
            members:[req.user],//add the owner as a member of the project
            status
        });
        res.status(201).json({
            message:"Project created successfully",
            project
        })
    } catch (error) {
        next(error)
    }
};

//add member to a project
exports.addMember = async(req,res,next)=>{
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
                message:"project does not exist!"
            });
        }

        const {userId} = req.body;

        const userExists = await User.findById(userId);
        if(!userExists){
            return res.status(404).json({
                message:"User does not exist!"
            });
        }
        const updatedProject = await Project.findOneAndUpdate(
            {
                _id:projectId,
                owner:req.user
            },
            {
                $addToSet:{members:userId}//add new member to the project members array if not already present
            },
            {
                new:true
            }
        );
        res.status(200).json({
            message:"Member added successfully",
            updatedProject
        })  

    } catch (error) {
        next(error)
    }
};

//remove member from a project
exports.removeMember = async(req,res,next)=>{
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
                message:"project does not exist!"
            });
        }

        const {userId} = req.body;

         if(projectExists.owner.toString() === userId){
            return res.status(403).json({
                message:"You cannot remove the owner of the project"
            })
        };    

        const updatedProject = await Project.findOneAndUpdate(
            {
                _id:projectId,
                owner:req.user
            },
            {
                $pull:{members:userId}//remove member from the project members array
            },
            {
                new:true
            }
        );
        res.status(200).json({
            message:"Member removed successfully",
            updatedProject
        })

    } catch (error) {
        next(error)
    }
};

//get all projects of a user
exports.getProjects = async(req,res,next) =>{
    try {
        const projects = await Project.find({            
            owner:req.user});
        if(projects.length ===0){
            return res.status(404).json({
                message:"No projects found"
            })
        };
        res.status(200).json(projects);
    } catch (error) {
        next(error)
    }
};

exports.getProjectById = async(req,res,next) =>{
    try {
        const project = await Project.findOne({
            _id:req.params.id,
            owner:req.user});
        if(!project){
            return res.status(404).json({
                message:"Project not found"
            })
        };

        res.status(200).json(project)
    } catch (error) {
        next(error);
    }
};

exports.updateProject = async(req,res,next) =>{
    try {
        const{name,description,status} = req.body;

        const updatedProject =await Project.findOneAndUpdate(
            {   _id:req.params.id,
                owner:req.user
            },
            {
                name,
                description,
                status
            },
            {
                new:true,
                runValidators:true
            }        
        );
        
        if(!updatedProject){
            return res.status(404).json({
                message:"Project not found"
            })
        };
        res.status(200).json({
            message:"Project updated successfully",
            updatedProject
        })
    } catch (error) {
        next(error);
    }
};

exports.deleteProject = async(req,res,next) =>{
    try {
        const deletedProject = await Project.findOneAndDelete({
            _id:req.params.id,
            owner:req.user
        });
        if(!deletedProject){
            return res.status(404).json({
                message:"Project not found"
            })
        };
        res.status(200).json({
            message:"project deleted successfully",
            deletedProject
        })
    } catch (error) {
        next(error)
    }
};