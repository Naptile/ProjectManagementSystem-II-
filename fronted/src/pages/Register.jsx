import Logo from "@/components/Logo"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react";
import api from "@/services/api";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const[showPassword,setShowPassword]=useState(false);
    const[error,setError]=useState("");
    const[loading,setLoading]=useState(false);
    const [form,setform]=useState(
        {
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
        }
    );

    const navigate =useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            if(form.password !== form.confirmPassword){
                toast.error("Password do not match")
                setError("Password do not match")
                return;
            }
            const{confirmPassword, ...userData}=form;
            await api.post("/auth/register",userData);
            toast.success("User Registered Successfully");
            setform({
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
                 });
            setError("");
            navigate("/login")
        } catch (error) {
            toast.error(error.response?.data?.error || error.response?.data?.message||"Registration failed" )
            setError(error.response?.data?.message );
            
        }
        finally{
            setLoading(false)
        }
    }
    return(
        <section className="bg-white w-full h-screen flex justify-center items-center md:p-4">
            
            <div className="flex gap-4 w-full p-5 bg-white rounded-xl shadow-xl border border-slate-200 ">
                {/* left image start */}
                <div className="hidden md:flex p-4 ">
                   <img src="team.jpg" alt="image of a team"className="rounded-xl" />  
                                  
                </div>
                {/* left image end */}

                {/* form section start */}
                <div className=" text-center  mx-auto  bg-white  border-7 border-white  border-r-green-700 border-r-8   p-6">
                    {/* logo div */}
                    <div className="flex flex-col gap-4">
                        <Logo name={"Task Management System"}/> 
                         <h1 className="text-xl p-3 text-slate-700 whitespace-nowrap">
                            {
                           
                           loading?<Loader/>:"Create Account"
                           }
                            </h1>
                         {
                            error&&(
                                <p className="text-red-400 text-lg">{error}</p>
                            )
                         }                                 
                    </div>                 

                    {/* start of form */}
                    <form className="m-auto shadow-lg   bg-white w-full p-2 " onSubmit={handleSubmit}>
                        <input 
                         type="text"
                         required
                         placeholder="Full name"
                         className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm bg-gray outline-blue-300 mb-4"
                         value={form.name}
                         onChange={(e)=>setform({...form,name:e.target.value})}
                         />
                        <input type="email"
                        required
                         placeholder="email" 
                         className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm bg-gray outline-blue-300 mb-4"
                         value={form.email}
                         onChange={(e)=>setform({...form,email:e.target.value})}
                         />
                        <div className="relative" >
                            <input type={showPassword ? "text" : "password"}
                            required
                             placeholder="password"
                             className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm  bg-gray outline-blue-300 mb-4"
                             value={form.password}
                             onChange={(e)=>setform({...form,password:e.target.value})}
                             />
                            <button 
                            type="button"
                            onClick={()=>setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                           >
                                {showPassword ?(
                                    <EyeOff size={20}/>
                                ):(
                                    <Eye size={20}/>
                                )}
                                </button>

                               
                        </div>
                        
                        <div className="relative" >
                            <input type={showPassword?"text" :"password"} 
                            placeholder="confirm password" className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm bg-gray outline-blue-300 mb-4"
                            value={form.confirmPassword}
                            onChange={(e)=>setform({...form,confirmPassword:e.target.value})}
                            />

                            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword?(
                                    <EyeOff size={20}/>
                                ):
                                (
                                    <Eye size={20}/>
                                )}
                            </button>

                        </div>

                         <button className="bg-green-700 w-full px-8 py-3 rounded-xl text-lg text-white hover:bg-green-800 transition-colors disabled:text-slate-300 disabled:bg-green-600"
                         disabled={loading}
                         >
                            {
                            loading?"Creating...":"Register"
                            }
                         </button>

                         <Link to={"/login"} ><p className="mt-5 hover:text-blue-600 transition:colors whitespace-nowrap">Already have an account ? Login</p></Link>
                    </form>                   
                </div>

            </div>
           
        </section>
         
    )
}

//  👁️👁️‍🗨️