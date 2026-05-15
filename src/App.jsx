import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import AirportTransfers from "./pages/AirportTransfers";
import HotelTransfers from "./pages/HotelTransfers";
import CrossBorderTransfers from "./pages/CrossBorderTransfers";
import GuidedTours from "./pages/GuidedTours";
import VictoriaFallsPackages from "./pages/VictoriaFallsPackages";
import ChobePackages from "./pages/ChobePackages";
import MultiDaySafaris from "./pages/MultiDaySafaris";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/airport-transfers" element={<AirportTransfers />} />
        <Route path="/hotel-transfers" element={<HotelTransfers />} />
        <Route path="/cross-border-transfers" element={<CrossBorderTransfers />} />
        <Route path="/guided-tours" element={<GuidedTours />} />
        <Route path="/victoria-falls-packages" element={<VictoriaFallsPackages />} />
        <Route path="/chobe-packages" element={<ChobePackages />} />
        <Route path="/multi-day-safaris" element={<MultiDaySafaris />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
