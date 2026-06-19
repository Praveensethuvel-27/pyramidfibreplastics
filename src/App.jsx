import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Industries from "./pages/Industries";
import Process from "./pages/Process";
import Gallery from "./pages/Gallery";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Scroll restoration & back to top widget */}
        <ScrollToTop />

        {/* Global Navigation header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/process" element={<Process />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route redirection */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Floating WhatsApp chat widget */}
        <WhatsAppButton />

        {/* Premium footer site directory */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
