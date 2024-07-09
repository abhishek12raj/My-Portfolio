import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      
    
<Route path="/" element={ <Home />}/>
<Route path="/products" element={ <Project />}/>
<Route path="/skills" element={ <Skills />}/>
<Route path="/experience" element={  <Experience />}/>
<Route path="/contact" element={ <Contact />}/>


    </Routes>
    </BrowserRouter>
     
     
       
        
        
       
        
      
    </>
  );
}

export default App;
