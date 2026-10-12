require("dotenv").config();
const express = require("express");
const app = express();
const cors =require("cors");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleWare/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>res.send("Api server running..."))

app.use("/api/auth",userRoutes);
app.use("/api",taskRoutes);
app.use("/api",projectRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server running on http://localhost:${PORT}`))