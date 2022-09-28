import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProfilePage from "./pages/ProfilePage";
import StudiesPage from "./pages/StudiesPage";

function App() {
  return (
      <BrowserRouter>
        <main className="h-[100%]">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
              <Route path="/studies" element={<StudiesPage />}/>
              <Route path="/portfolio" element={<PortfolioPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
            </Routes>
          <footer className="py-[20px] flex bg-black pr-[126px] pl-[77px] justify-between items-center">
            <p className="text-white text-[20px]">Diseño por <a href="">Jesus Porras</a>, Código por <a href="">David Barón</a></p>
            <div className="flex items-center text-white text-[20px] mr-[54px]">
              <a href="https://www.linkedin.com/in/david-leonardo-bar%C3%B3n-avilan-b14214242/" className="text-white text-[20px] mr-[10px]" target="_blank">Linkedin</a>
            <ion-icon name="logo-linkedin"></ion-icon>
            </div>  
            <div className="flex items-center text-white text-[20px]">
              <a href="https://github.com/Ldbelop" className="text-white text-[20px] mr-[10px]" target="_blank">GitHub</a>  
              <ion-icon name="logo-github"></ion-icon>
            </div>
          </footer>
        </main>
        
      </BrowserRouter>
  )
}

export default App
