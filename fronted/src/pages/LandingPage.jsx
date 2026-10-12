import Navbar from "../components/Navbar";
import Lightfall from '../components/Lightfall';
import About from "@/components/About";
export default function LandingPage() {
  return(
    <div className="relative  min-h-[50%] h-50% overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 z-0 h-50%">
    <Lightfall
      colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
      backgroundColor="#0A29FF"
      speed={0.5}
      streakCount={2}
      streakWidth={1}
      streakLength={1}
      glow={1}
      density={0.6}
      twinkle={1}
      zoom={3}
      backgroundGlow={0.5}
      opacity={1}
      mouseInteraction
      mouseStrength={0.5}
      mouseRadius={1}
      color1="#A6C8FF"
      color2="#5227FF"
      color3="#FF9FFC"
    />
  </div>

  {/* FOREGROUND */}

  <div className="relative z-10">
    <Navbar/>  

    <main className="flex flex-col  items-center justify-center">
      <div className=" flex flex-col gap-6 p-7 text-center text-white bg-white/10 rounded-xl h-70 ">
        <h1 className="text-5xl font-bold">
          Task Management System
        </h1>

        <p className="mt-4 text-lg">
          Manage your projects and tasks efficiently.
        </p>
      </div>
     
    </main>
    
  </div> 

</div>
  )
}

//  <About/>