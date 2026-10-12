const express = require("express");
const router = express.Router();
const{
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    addMember,
    removeMember
} = require("../controllers/projectController");
const { authMiddleware } = require("../middleWare/authMiddleware");

router.post("/projects",authMiddleware,createProject);
router.post("/projects/:projectId/members",authMiddleware,addMember);
router.delete("/projects/:projectId/members",authMiddleware,removeMember);
router.get("/projects",authMiddleware,getProjects);
router.get("/projects/:id",authMiddleware,getProjectById);
router.put("/projects/:id",authMiddleware,updateProject);
router.delete("/projects/:id",authMiddleware,deleteProject);

module.exports = router;