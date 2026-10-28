import { Link } from "react-router-dom"
export default function Navbar(){
    return(
       <nav className=" items-center m-6 mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
        <div className="w-full gap-2 flex p-2 justify-between items-center  rounded-2xl  shadow-lg bg-white/10 ">
            
            <div className="flex items-center gap-2  ">
                <div className="flex text-white font-bold items-center text-lg h-10 w-15 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg shadow-xl">PMS</div>
                <h1 className="hidden md:flex text-xl font-serif text-white font-bold whitespace-nowrap ">Project Management System </h1>
            </div>
            
            <div className="flex gap-4 items-center text-white font-medium">
                <p className="text-lg hover:text-blue-500 transition-colors">About</p>
                <p className="text-lg hover:text-blue-500 transition-colors">Features</p>

                <Link to={"/login"}>
                 <button className="border py-2 px-4 text-lg rounded-lg hover:bg-white hover:text-black transition-colors shadow-lg bg-white/20 whitespace-nowrap">Get Started</button>
                </Link>
            </div>
        </div>
       </nav> 
    )
}