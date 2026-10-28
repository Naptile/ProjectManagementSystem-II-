import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from "./pages/Register";
export default function App(){
  return (
    // <div>
    //   {/* Landing page */}
    //   <div className="bg-slate-200 h-screen">
    //     <LandingPage/>
    //     <About/>
    //     <Features/>
    //     <Login/>
    //     <Footer/>
    //   </div>      

    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>

    
  
  )
}