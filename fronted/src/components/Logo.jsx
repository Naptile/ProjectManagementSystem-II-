export default function Logo({name}){
    return(
         <div className="flex items-center gap-2  ">
                <div className="flex text-white font-bold items-center text-lg h-10 w-15 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg shadow-xl">PMS</div>
                <h1 className="text-xl font-serif bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold whitespace-nowrap ">{name}</h1>
            </div>
    )
}