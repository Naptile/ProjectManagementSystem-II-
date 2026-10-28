import Logo from "@/components/Logo"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react";
export default function Register(){
    const[showPassword,setShowPassword]=useState(false);
    const [form,setform]=useState(
        {
            name:"",
            email:"",
            password:"",
        }
    );
    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            
        } catch (error) {
            
        }
    }
    return(
        <section className="bg-white w-full h-screen flex justify-center items-center md:p-4">
            
            <div className="flex gap-4 w-full p-5 bg-white rounded-xl shadow-xl border border-slate-200 ">
                <div className="hidden md:flex p-4 ">
                   <img src="team.jpg" alt="image of a team"className="rounded-xl" />                  
                </div>

                <div className=" text-center  mx-auto  bg-white  border-7 border-white  border-r-green-700 border-r-8   p-6">
                    <div className="flex flex-col gap-4">
                        <Logo/> 
                         <h1 className="text-xl p-3 text-slate-700 whitespace-nowrap">Create Account</h1>                  
                                   
                    </div>                 

                     <form className="m-auto shadow-lg   bg-white w-full p-2 ">
                        <input type="text" placeholder="Full name" className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm bg-gray outline-blue-300 mb-4"/>
                        <input type="email" placeholder="email" className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm bg-gray outline-blue-300 mb-4"/>
                        <div className="relative" >
                            <input type={showPassword ? "text" : "password"} placeholder="password" className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm  bg-gray outline-blue-300 mb-4"/>
                            <button 
                            type="button"
                            onClick={()=>setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2">
                                {!showPassword ?(
                                    <EyeOff size={20}/>
                                ):(
                                    <Eye size={20}/>
                                )}
                                </button>
                        </div>
                        
                        <div className="relative" >
                            <input type={showPassword?"text" :"password"} placeholder="confirm password" className="w-full  rounded-lg px-6 py-3 border border-slate-200  shadow-sm bg-gray outline-blue-300 mb-4"/>
                            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword?(
                                    <Eye size={20}/>
                                ):
                                (
                                    <EyeOff size={20}/>
                                )}
                            </button>
                        </div>
                         <button className="bg-green-700 w-full px-8 py-3 rounded-xl text-lg text-white hover:bg-green-800 transition-colors">Register</button>
                         <Link to={"/login"} ><p className="mt-5 hover:text-blue-600 transition:colors whitespace-nowrap">Already have an account ? Login</p></Link>
                    </form>                   
                </div>

            </div>
        </section>
    )
}

//  👁️👁️‍🗨️