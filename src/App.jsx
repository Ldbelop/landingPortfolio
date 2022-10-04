import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProfilePage from "./pages/ProfilePage";
import StudiesPage from "./pages/StudiesPage";
import ThanksPage from "./pages/ThanksPage";

function App() {  
  return (
      <BrowserRouter>
        <main>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
              <Route path="/studies" element={<StudiesPage />}/>
              <Route path="/portfolio" element={<PortfolioPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/thanks" element={<ThanksPage />}/>
            </Routes>
            <FooterComponent />
        </main>
      </BrowserRouter>
  )
}

export default App
