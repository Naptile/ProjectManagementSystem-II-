import About from "./components/About";
import Features from "./components/Features";
import LandingPage from "./pages/LandingPage";

export default function App(){
  return (
    <div className="bg-slate-200 h-screen">
      <LandingPage/>
       <About/>
       <Features/>
    </div>
    
  
  )
}