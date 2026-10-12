const express = require("express");
const router = express.Router();
const{
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,    
} = require("../controllers/taskController");
const { authMiddleware } = require("../middleWare/authMiddleware");

router.get("/projects/:projectId/tasks",authMiddleware,getTasks);
router.get("/projects/:projectId/tasks/:id",authMiddleware,getTaskById);
router.post("/projects/:projectId/tasks",authMiddleware,createTask);
router.put("/projects/:projectId/tasks/:id",authMiddleware,updateTask);
router.delete("/projects/:projectId/tasks/:id",authMiddleware,deleteTask);

module.exports = router;