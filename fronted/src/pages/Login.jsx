import Logo from "../components/Logo"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import api from "../services/api";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [showPassword,setShowPassword] = useState(false);
    const[error,setError] =useState("");
    const[loading,setLoading]=useState(false);
    const[form,setform] = useState({
        email:"",
        password:""
    });

    const navigate=useNavigate();

    const handleSubmit =async(e)=>{
        e.preventDefault();
        setLoading(true)
        try {
            const response =await api.post("/auth/login",form)
            const token =response.data.token
            localStorage.setItem("token",token);
            toast.success("Login Successful Redirecting to dashboard...")
            setform({
                email:"",
                password:""
            });
            setError("");
            navigate("/dashboard")
        } catch (error) {
            toast.error(error.response?.data?.error ||error.response?.data?.message || "Login failed")
            setError(error.response?.data?.message||error.response?.data?.error|| error.message);
        }
        finally{
            setLoading(false)
        }
    }
   
    return(
        <section className="bg-white w-full h-screen flex justify-center items-center md:p-4">
            
            <div className="flex gap-4 w-full shadow-2xl border border-slate-100 md:w-7xl max-w-9xl  p-4 bg-white  rounded-sm ">

                <div className="w-full md:w-[50%] text-center  mx-auto  bg-white border-l-green-700 border-l-7    p-6">
                    <div className="flex flex-col gap-4">
                        <Logo name={"Project Management System"}/> 
                         <h1 className="text-xl p-3 text-slate-700 whitespace-nowrap">{
                            loading?<Loader/>:"Welcome Back"
                            }</h1>                           
                         {
                            error&&(
                                <p className="text-red-600">{error}</p>
                            )
                         }
                    
                    </div>               
                     <form className=" m-auto   bg-white  p-6 " onSubmit={handleSubmit}>
                        <label htmlFor="email" className="flex justify-left mb-4 ">Email</label>

                        <input type="email"
                        required
                         placeholder="email"
                         className="w-full bg-white px-6 py-3 border-b border-b-slate-500   outline-none mb-4"
                         value={form.email}
                         onChange={(e)=>setform({...form,email:e.target.value})}
                         />

                        <label htmlFor="password" className="flex justify-left mt-4">Password</label>

                        <div className="relative">

                            <input type={showPassword? "text":"password"}
                            required
                             placeholder="password" 
                             className="w-full bg-white px-6 py-3 border-b border-b-slate-500   outline-none mb-4"
                             value={form.password}
                             onChange={(e)=>setform({...form,password:e.target.value})}
                             />

                           <button type="button"
                            onClick={()=>setShowPassword(!showPassword)}                    
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"                            
                            >👁️</button> 
                            

                        </div>

                        <button
                        className="bg-green-700 w-full px-8 py-3 rounded-xl text-lg text-white hover:bg-green-800 transition-colors disabled:bg-green-600 disabled:text-slate-300"
                        disabled={loading}
                        >
                           {loading?"Signing...":"Login"}
                        </button>

                        <Link to={"/register"} ><p className="mt-5 hover:text-blue-600 transition:colors">Don't have an account ? Register</p></Link>

                    </form>                   
                </div>

                 {/* image side */}
                <div className=" hidden md:flex  ">                    
                   <img src="team.jpg" alt="image of a team" className="rounded-xl " />                  
                </div>

            </div>
        </section>
    )
}


// 👁️