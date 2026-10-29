export default function Loader(){
    return(
        <div className="flex flex-col justify-center items-center gap-3">
            <div className="h-6 w-11 rounded-full border-green-500 border-3 border-t-transparent animate-spin  relative"></div>
            <div className="h-6 w-11 rounded-full border-green-500 border-4 border-t-transparent animate-spin  absolute"></div>
            <div><p className="text-xl text-slate-400">Loading...</p></div>
       
        </div>
    )
}