import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";
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
            <FooterComponent />
        </main>
      </BrowserRouter>
  )
}

export default App
