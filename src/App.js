import React from "react";
import Navbar from "./UI/navbar/Navbar";
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Certificates from './pages/Certificates/Certificates';
import Services from './pages/Services/Services';
import Footer from "./UI/footer/Footer";
import News from "./pages/News/News";
import Team from './pages/Team/Team';
import Product from "./pages/Product/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
