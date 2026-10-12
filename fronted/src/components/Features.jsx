export default function Features(){
    const features= [
        {
            name:"Collaboration",
            icon:"team.jpg",
            Description:"Easy collaboration with other groups"
        },
        {
            name:"Safety",
            icon:"team.jpg",
            Description:"Yourprojects are secure in this platfom"

        },

        {
            name:"User Experience",
            icon:"team.jpg",
            Description:"The system maximizes user satisfaction and experience"
        },
         
    ]
    return(
        <section className=" w-full   mb-5  p-8 ">
            <div className="flex flex-col md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full bg-blue-200  m-auto  items-center max-w-7xl gap-3 p-5">
                <h1 className="sm:col-span-2 lg:col-span-3 text-center text-3xl text-blue-500 font-serif">Features</h1>
                {
                    features.map((feature,index)=>(
                        <div className=" bg-slate-100 p-1 shadow-lg flex flex-col  w-full h-full rounded-xl ">
                            <div className="w-full rounded-xl  mb-4 bg-green-400 " key={index}>
                                <img src={feature.icon} alt="image" className="rounded-xl" />
                            </div>
                            <h1 className="text-center text-2xl font-serif text-slate-800  mb-4 h-8 border-b border-blue-500 border-b-8 ">{feature.name}</h1>                            
                            <p className="text-center font-roboto text-lg text-slate-800">{feature.Description}</p>
                            
                        </div>
                    ))
                }
            </div>
        </section>
    )}
