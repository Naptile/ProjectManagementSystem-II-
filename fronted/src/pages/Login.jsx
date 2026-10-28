import Logo from "@/components/Logo"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Login(){
    const [showPassword,setShowPassword] = useState(false);

    return(
        <section className="bg-white w-full h-screen flex justify-center items-center md:p-4">
            
            <div className="flex gap-4 w-full shadow-2xl border border-slate-100 md:w-7xl max-w-9xl  p-4 bg-white  rounded-sm ">
                <div className="w-full md:w-[50%] text-center  mx-auto  bg-white border-l-green-700 border-l-7    p-6">
                    <div className="flex flex-col gap-4">
                        <Logo/> 
                         <h1 className="text-xl p-3 text-slate-700 whitespace-nowrap">Welcome Back</h1>                           
                    </div>                 

                     <form className=" m-auto   bg-white  p-6 ">
                        <label htmlFor="email" className="flex justify-left mb-4 ">Email</label>
                        <input type="email" placeholder="email" className="w-full bg-white px-6 py-3 border-b border-b-slate-500   outline-none mb-4"/>
                        <label htmlFor="password" className="flex justify-left mt-4">Password</label>
                        <div className="relative">
                            <input type={showPassword? "text":"password"} placeholder="password" className="w-full bg-white px-6 py-3 border-b border-b-slate-500   outline-none mb-4"/>
                            <button type="button"
                            onClick={()=>setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2">👁️</button>
                        </div>
                        <button className="bg-green-700 w-full px-8 py-3 rounded-xl text-lg text-white hover:bg-green-800 transition-colors">Login</button>
                         <Link to={"/register"} ><p className="mt-5 hover:text-blue-600 transition:colors">Don't have an account ? Register</p></Link>
                    </form>
                   
                </div>

                <div className=" hidden md:flex  ">
                   <img src="team.jpg" alt="image of a team" className="rounded-xl " />
                  
                </div>

            </div>
        </section>
    )
}


// 👁️