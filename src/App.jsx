import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Experiences from "./pages/Experiences";

import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Book from "./pages/Book";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* EXPERIENCES */}
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:slug" element={<ProductDetails />} />

        {/* TOURS */}
        <Route path="/tours" element={<Products />} />
        <Route path="/tours/type/:type" element={<Products />} />
        <Route path="/tours/:slug" element={<ProductDetails />} />
        <Route path="/book/:slug" element={<Book />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />

        {/* Backward-compatible redirects */}
        <Route path="/experience" element={<Navigate to="/experiences" replace />} />
        <Route path="/experience/:slug" element={<ProductDetails />} />
        <Route path="/products" element={<Navigate to="/tours" replace />} />
        <Route path="/products/type/:type" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/tours/multi-day" element={<Navigate to="/tours/type/package" replace />} />
        <Route path="/tours/day-tours" element={<Navigate to="/tours/type/tour" replace />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
