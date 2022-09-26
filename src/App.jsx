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
        <main className="h-[100%] bg-[url('https://firebasestorage.googleapis.com/v0/b/superheroes-fakeapi.appspot.com/o/background.jpeg?alt=media&token=89608094-231b-48cc-a826-5d834807a492')]">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path="/studies" element={<StudiesPage />}/>
            <Route path="/portfolio" element={<PortfolioPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
          {/* <p className="h-[1080px] z-0 relative bg-gradient-to-t from-transparent to-blackbg bottom-[1080px]"></p> */}
        </main>
        
      </BrowserRouter>
  )
}

export default App
