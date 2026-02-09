import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Lartiste from "./pages/Lartiste";
import Prestations from "./pages/Prestations";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Mentionslegales from "./pages/Mentionslegales";

const App = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/galerie/:slug" element={<Galerie />} />
                <Route path="/lartiste" element={<Lartiste />}/>
                <Route path="/prestations" element={<Prestations />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Error />} />

                <Route path="/mentionslegales" element={<Mentionslegales />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;